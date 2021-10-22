import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proposal } from './entities/proposal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProposalService {
  constructor(
    @InjectRepository(Proposal)
    private proposalRepository: Repository<Proposal>,
  ) {}
  async create(createProposalDto: CreateProposalDto) {
    try {
      await this.proposalRepository.insert(createProposalDto);
    } catch (e) {
      throw new HttpException('Insert fail', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<Proposal[]> {
    return await this.proposalRepository.find();
  }

  async findOne(id: number) {
    return await this.proposalRepository.find({ where: { id } });
  }

  update(id: number, updateProposalDto: UpdateProposalDto) {
    return `This action updates a #${id} proposal`;
  }

  async remove(id: number) {
    try {
      await this.proposalRepository.delete({ id });
    } catch (e) {
      throw new HttpException('Cannot delete', HttpStatus.BAD_REQUEST);
    }
  }
}
