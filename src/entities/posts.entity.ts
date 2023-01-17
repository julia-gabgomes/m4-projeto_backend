import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm";
import Comment from "./comments.entity";
import User from "./users.entity";

@Entity("posts")
class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  title: string;

  @Column({ length: 1000 })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ default: 0 })
  likes: number;

  @Column()
  type: string;

  @ManyToOne(() => User, (user) => user.post)
  user: User;

  @ManyToOne(() => Comment, (comments) => comments.post)
  comment: Comment[];
}

export default Post;
