import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProposalDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsArray()
  @ApiProperty()
  options: string[];
  @ApiProperty()
  @IsNumber()
  correctAnswer: number;
}
