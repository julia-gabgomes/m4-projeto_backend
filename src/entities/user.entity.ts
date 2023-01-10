import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Post } from "./post.entity";
import { Technologies } from "./technology.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: false })
  phone_number: string;

  @Column({
    default: "Junior",
    type: "enum",
    enum: ["Junior", "Pleno", "Sênior", "Master"],
  })
  level: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Post, (posts) => posts.user)
  post: Post[];

  @OneToMany(() => Technologies, (technologies) => technologies.user)
  technologies: Technologies[];
}

export default User;
