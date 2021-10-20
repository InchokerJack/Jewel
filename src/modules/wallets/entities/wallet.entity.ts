import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Proposal } from '../dto/create-wallet.dto';

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

  // @Column()
  // answer: []Answer
}

// type Answer propsalid, content :1234