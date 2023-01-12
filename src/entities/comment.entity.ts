import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Post } from "./post.entity";

@Entity("comments")
class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 300 })
  content: string;

  @ManyToOne(() => Post, (posts) => posts.comment)
  post: Post;
}

export { Comments };
