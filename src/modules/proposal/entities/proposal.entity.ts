import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proposal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column('simple-array')
  options: string[];

  @Column()
  correctAnswer: number;

  @Column({ type: 'timestamp', nullable: true })
  publishDate: Date;
}
