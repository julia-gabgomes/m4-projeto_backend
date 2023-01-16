import AppDataSource from "../../data-source";
import Comment from "../../entities/comments.entity";
import Post from "../../entities/posts.entity";
import { AppError } from "../../errors/AppError";

const listAllCommentsFromAPostService = async (postId: string) => {
  const foundPostComments = await AppDataSource.getRepository(Comment)
    .createQueryBuilder("comment")
    .innerJoinAndSelect("comment.post", "post")
    .where("comment.post.id = :id", { id: parseInt(postId) })
    .getMany();

  if (!foundPostComments) {
    throw new AppError("Post does not exists", 404);
  }

  return foundPostComments;
};

export default listAllCommentsFromAPostService;
