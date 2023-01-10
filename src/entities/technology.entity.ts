import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./user.entity";

@Entity("technologies")
class Technologies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @ManyToOne(() => User, (users) => users.technologies)
  user: User;
}

export { Technologies };
