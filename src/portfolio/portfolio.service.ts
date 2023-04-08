import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobsDto } from './portfolio.dto';
import { Portfolio } from './portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private portfolioRepo: Repository<Portfolio>,
  ) {}
  jobs = ['Fardelins', 'Lentii', 'Dumele', 'Sabi Radio'];
  getJobs = (): string[] => this.jobs;

  createPortfoilio(portfolio: any) {
    return this.portfolioRepo.save(portfolio);
  }

  findAll(): Promise<Portfolio[]> {
    return this.portfolioRepo.find();
  }

  findOne(id: number): Promise<Portfolio | null> {
    return this.portfolioRepo.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.portfolioRepo.delete(id);
  }
}
