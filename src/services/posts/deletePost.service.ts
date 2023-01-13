import Post from "../../entities/posts.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { IPost } from "../../interfaces/posts.interface";

const deletePostService = async (id: number): Promise<void> => {
  const PostRepository = AppDataSource.getRepository(Post);

  const findPost: IPost = await PostRepository.findOneBy({
    id: Number(id),
  });

  if (findPost == undefined) {
    throw new AppError("Post does not exists", 400);
  }

  await PostRepository.delete(findPost);
};
export default deletePostService;
