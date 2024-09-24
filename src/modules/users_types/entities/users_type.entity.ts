import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('user_type')
export class UserType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

}
