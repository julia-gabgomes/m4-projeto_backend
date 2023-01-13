import { IPost } from "../../interfaces/posts.interface";
import AppDataSource from "../../data-source";
import Post from "../../entities/posts.entity";

const listAllPostsService = async (): Promise<IPost[]> => {
  const techRepository = AppDataSource.getRepository(Post);

  const postList = techRepository.find();

  return postList;
};
export default listAllPostsService;
