import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from '../entities/portfolio.entity';
import { Stack } from '../entities/stack.entity';
import { StackService } from './stack.service';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private portfolioRepo: Repository<Portfolio>,
    private stackRepo: StackService,
  ) {}
  jobs = ['Fardelins', 'Lentii', 'Dumele', 'Sabi Radio'];
  getJobs = (): string[] => this.jobs;

  async createPortfoilio(portfolio: any) {
    const stacksList: Stack[] = [];
    for (const stack of portfolio.stacks) {
      const relatedStack = await this.stackRepo.findOne(stack);
      stacksList.push(relatedStack);
    }
    const newPortfolio = this.portfolioRepo.create({
      ...portfolio,
      stacks: stacksList,
    });
    // console.log(newPortfolio);
    return await this.portfolioRepo.save(newPortfolio);
  }

  async update(id, portfolio) {
    const newJob = { ...portfolio, id: +id };
    return await this.portfolioRepo.save(newJob);
  }

  findAll(): Promise<Portfolio[]> {
    return this.portfolioRepo.find({
      relations: {
        stacks: true,
      },
    });
  }

  async findOne(id: number): Promise<Portfolio | null> {
    return await this.portfolioRepo.findOneByOrFail({ id });
  }

  async delete(id: number): Promise<void> {
    await this.portfolioRepo.delete(id);
  }
}
