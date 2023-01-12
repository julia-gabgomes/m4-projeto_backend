import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm";
import { Comments } from "./comment.entity";
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

  @Column({ type: "enum", enum: ["Dúvida", "Vaga", "Notícia"] })
  type: string;

  @ManyToOne(() => User, (user) => user.post)
  user: User;

  @ManyToOne(() => Comments, (comments) => comments.post)
  comment: Comments[];
}

export { Post };
