import Post from "../../entities/posts.entity";
import { IPostRequest, IPost } from "../../interfaces/posts.interface";
import AppDataSource from "../../data-source";

const createPostService = async (postData: IPost): Promise<Post> => {
  const postRepository = AppDataSource.getRepository(Post);

  const post = postRepository.create(postData);
  await postRepository.save(post);

  return post;
};
export default createPostService;
