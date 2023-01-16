import { IComments } from "../../interfaces/comments.interface";
import AppDataSource from "../../data-source";
import Post from "../../entities/posts.entity";
import Comment from "../../entities/comments.entity";

const createCommentService = async (
  data: IComments,
  postId: string
): Promise<IComments> => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const postRepository = AppDataSource.getRepository(Post);

  const foundPost: Post = await postRepository.findOneBy({
    id: parseInt(postId),
  });

  const createComment = commentRepository.create({
    content: data.content,
    post: foundPost,
  });
  await commentRepository.save(createComment);

  return createComment;
};
export default createCommentService;
