import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('jobs')
export class PortfolioController {
  constructor(private readonly portFolioService: PortfolioService) {}

  @Get()
  getHello(): string[] {
    return this.portFolioService.getJobs();
  }
}
