import AppDataSource from "../../data-source";
import Post from "../../entities/posts.entity";
import { AppError } from "../../errors/AppError";
import { IPost, IPostRequest } from "../../interfaces/posts.interface";

const updatePostService = async (
  postData: IPost,
  id: number
): Promise<IPost> => {
  if (Object.keys(postData).length === 0) {
    throw new AppError("Fields are not able to update", 401);
  }

  const PostRepository = AppDataSource.getRepository(Post);

  const findPost = await PostRepository.findOneBy({
    id: Number(id),
  });

  if (findPost == undefined) {
    throw new AppError("Post does not exists", 400);
  }

  const updatedPost = PostRepository.create({
    ...findPost,
    ...postData,
  });

  await PostRepository.save(updatedPost);

  return updatedPost;
};
export default updatePostService;
