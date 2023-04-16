import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from './portfolio.entity';
import { StackService } from 'src/stack/stack.service';
import { Stack } from 'src/stack/stack.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private portfolioRepo: Repository<Portfolio>,
    private stackService: StackService,
  ) {}
  jobs = ['Fardelins', 'Lentii', 'Dumele', 'Sabi Radio'];
  getJobs = (): string[] => this.jobs;

  async createPortfoilio(portfolio: any) {
    const stacksList: Stack[] = [];
    portfolio.stacks.forEach((stack: Stack) => {
      this.stackService.findOne(+stack).then((stack) => stacksList.push(stack));
      console.log({ ...portfolio, stacks: [...stacksList] });
    });
    // return await this.stackService
    //   .findOne(+portfolio.stacks)
    //   .then((stack) =>
    //     this.portfolioRepo.save({ ...portfolio, stacks: [{ ...stack }] }),
    //   );
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
