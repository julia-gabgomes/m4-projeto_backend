import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./users.entity";

@Entity("technologies")
class Technology {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @ManyToOne(() => User, (users) => users.technologies)
  user: User;
}

export default Technology;
