import { IsString, isString } from 'class-validator';

export class Proposal {
  @IsString()
  proposalId: string;

  @IsString()
  answer: string;
}
export class CreateWalletDto {}
