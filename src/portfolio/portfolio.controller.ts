import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('jobs')
export class PortfolioController {
  constructor(private readonly portFolioService: PortfolioService) {}

  @Get()
  getHello(): string[] {
    return this.portFolioService.getJobs();
  }

  @Get(':id')
  getJob(@Param('id') id): string {
    return id;
  }

  @Post('create')
  createJob(@Body() body): any {
    return body;
  }
}
