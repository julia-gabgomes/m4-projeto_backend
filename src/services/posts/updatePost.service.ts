import AppDataSource from "../../data-source";
import Post from "../../entities/posts.entity";
import { AppError } from "../../errors/AppError";
import { IPost, IPostRequest } from "../../interfaces/posts.interface";
import { postResponseSerializer } from "../../serializers/posts.serializers";

const updatePostService = async (
  postData: IPostRequest,
  postId: string,
  userId: string
): Promise<IPost> => {
  if (Object.keys(postData).length === 0) {
    throw new AppError("Fields are not able to update", 401);
  }

  const postRepository = AppDataSource.getRepository(Post);

  const foundPost = await postRepository
    .createQueryBuilder("post")
    .innerJoinAndSelect("post.user", "user")
    .where("post.id = :id", { id: parseInt(postId) })
    .getOne();

  if (!foundPost) {
    throw new AppError("Invalid post id", 404);
  }

  if (foundPost.user.id !== parseInt(userId)) {
    throw new AppError("Can't update other user's post", 403);
  }

  const updatedPost = postRepository.create({ ...foundPost, ...postData });
  await postRepository.save(updatedPost);

  const validatedPost = await postResponseSerializer.validate(foundPost, {
    stripUnknown: true,
  });

  return validatedPost;
};
export default updatePostService;
