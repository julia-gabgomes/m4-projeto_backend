import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Post from "./posts.entity";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 300 })
  content: string;

  @ManyToOne(() => Post, (posts) => posts.comment)
  post: Post;
}

export default Comment;
