import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
interface Answer {
  proposalId: number;
  answer: number;
}
@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  isLocked: boolean;

  @Column()
  commitBalance: number;

  @Column('jsonb', { nullable: true })
  answer: Answer[];
}

