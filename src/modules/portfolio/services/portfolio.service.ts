import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from '../entities/portfolio.entity';
import { Stack } from '../entities/stack.entity';
import { StackService } from './stack.service';
import { Image as ImageEntity } from '../../upload/image.entity';
import { CreatePortfolioDto, PortfolioResponseDto } from '../dto/portfolio.dto';
import { UploadService } from 'src/modules/upload/upload.service';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private portfolioRepo: Repository<Portfolio>,
    private stackRepo: StackService,
    private uploadRepo: UploadService,
  ) {}
  jobs = ['Fardelins', 'Lentii', 'Dumele', 'Sabi Radio'];
  getJobs = (): string[] => this.jobs;

  async createPortfoilio(portfolio: CreatePortfolioDto) {
    const stacksList: Stack[] = [];
    let image: ImageEntity;
    for (const stack of portfolio.stacks) {
      const relatedStack = await this.stackRepo.findOne(
        stack as unknown as number,
      );
      stacksList.push(relatedStack);
    }
    if (portfolio?.image) {
      image = await this.uploadRepo.getImage(
        portfolio.image as unknown as number,
      );
      const newPortfolio = await this.portfolioRepo.create({
        ...portfolio,
        stacks: stacksList,
        image,
      });
      const savedPortfolio = await this.portfolioRepo.save(newPortfolio);
      return new PortfolioResponseDto(savedPortfolio);
    }
    const newPortfolio = await this.portfolioRepo.create({
      ...portfolio,
      stacks: stacksList,
    });
    return await this.portfolioRepo.save(newPortfolio);
  }

  async update(id, portfolio) {
    const newJob = { ...portfolio, id: +id };
    return await this.portfolioRepo.save(newJob);
  }

  async findAll(): Promise<PortfolioResponseDto[]> {
    const portfolios = await this.portfolioRepo.find({
      relations: {
        stacks: true,
        image: true,
      },
      order: {
        id: 'DESC',
      },
    });
    return portfolios.map((portfolio) => new PortfolioResponseDto(portfolio));
  }

  async findOne(id: number): Promise<PortfolioResponseDto> {
    const portfolio = await this.portfolioRepo.findOne({
      where: { id },
      relations: {
        stacks: true,
        image: true,
      },
    });
    if (!portfolio) throw new NotFoundException();
    return new PortfolioResponseDto(portfolio);
  }

  async delete(id: number): Promise<any> {
    await this.portfolioRepo.delete({ id });
    return { message: 'User deleted' };
  }
}
