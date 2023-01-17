import { IPostRequest } from "../../interfaces/posts.interface";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import Post from "../../entities/posts.entity";

const createPostService = async (
  postData: IPostRequest,
  userId: string
): Promise<Post> => {
  const userRepository = AppDataSource.getRepository(User);
  const postRepository = AppDataSource.getRepository(Post);

  const foundUser = await userRepository.findOneBy({ id: parseInt(userId) });

  const newPost = postRepository.create({ ...postData, user: foundUser });
  await postRepository.save(newPost);

  return newPost;
};
export default createPostService;
