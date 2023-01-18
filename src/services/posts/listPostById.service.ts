import AppDataSource from "../../data-source";
import Post from "../../entities/posts.entity";
import { AppError } from "../../errors/AppError";
import { postResponseSerializer } from "../../serializers/posts.serializers";

const listPostByIdService = async (postId: string) => {
  const postRepository = AppDataSource.getRepository(Post);

  const foundPost = await postRepository
    .createQueryBuilder("post")
    .innerJoinAndSelect("post.user", "user")
    .where("post.id = :id", { id: parseInt(postId) })
    .getOne();

  if (!foundPost) {
    throw new AppError("Invalid post id", 404);
  }

  const validatedPost = await postResponseSerializer.validate(foundPost, {
    stripUnknown: true,
  });

  return validatedPost;
};
export default listPostByIdService;
