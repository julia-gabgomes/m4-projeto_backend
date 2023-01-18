import { IPostRequest } from "../../interfaces/posts.interface";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import Post from "../../entities/posts.entity";
import { postResponseSerializer } from "../../serializers/posts.serializers";
import { IPost } from "../../interfaces/posts.interface";

const createPostService = async (
  postData: IPostRequest,
  userId: string
): Promise<IPost> => {
  const userRepository = AppDataSource.getRepository(User);
  const postRepository = AppDataSource.getRepository(Post);

  const foundUser = await userRepository.findOneBy({ id: parseInt(userId) });

  const newPost = postRepository.create({ ...postData, user: foundUser });
  await postRepository.save(newPost);

  const validatedPost = await postResponseSerializer.validate(newPost, {
    stripUnknown: true,
  });

  return validatedPost;
};
export default createPostService;
