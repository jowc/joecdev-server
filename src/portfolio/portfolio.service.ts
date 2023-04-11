import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  async findOne(id: number): Promise<Portfolio | null> {
    return await this.portfolioRepo.findOneByOrFail({ id });
  }

  async delete(id: number): Promise<void> {
    await this.portfolioRepo.delete(id);
  }
}
