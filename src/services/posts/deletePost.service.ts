import Post from "../../entities/posts.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { IPost } from "../../interfaces/posts.interface";

const deletePostService = async (
  postId: string,
  userId: string
): Promise<void> => {
  const postRepository = AppDataSource.getRepository(Post);

  const foundPost = await postRepository
    .createQueryBuilder("post")
    .innerJoinAndSelect("post.user", "user")
    .where("post.id = :id", { id: parseInt(postId) })
    .getOne();

  if (!foundPost) {
    throw new AppError("Post does not exists", 400);
  }

  if (foundPost.user.id !== parseInt(userId)) {
    throw new AppError("Can't update other user's post", 403);
  }

  const postToDelete: IPost = await postRepository.findOneBy({
    id: Number(postId),
  });

  await postRepository.delete(postToDelete.id);
};

export default deletePostService;
