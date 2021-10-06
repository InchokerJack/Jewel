import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proposal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  options: string[];

  @Column()
  correctAnswer: string;

  @Column({ type: 'timestamp' })
  publishDate: Date;
}
