export class CreateProposalDto {
  id: number;
  description: string;
  options: string[];
  correctAnswer: string;
  publishDate: string;
}
