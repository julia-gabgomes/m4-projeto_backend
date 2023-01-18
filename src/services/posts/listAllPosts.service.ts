import { IPost } from "../../interfaces/posts.interface";
import AppDataSource from "../../data-source";
import Post from "../../entities/posts.entity";
import { postListResponseSerializer } from "../../serializers/posts.serializers";

const listAllPostsService = async (): Promise<IPost[]> => {
  const techRepository = AppDataSource.getRepository(Post);

  const postList = await techRepository.find({ relations: { user: true } });

  const validatedPostList = await postListResponseSerializer.validate(
    postList,
    {
      stripUnknown: true,
    }
  );

  return validatedPostList;
};
export default listAllPostsService;
