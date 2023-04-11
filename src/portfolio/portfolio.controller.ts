import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { CreateJobsDto } from './portfolio.dto';
import { Portfolio } from './portfolio.entity';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portFolioService: PortfolioService) {}

  @Get()
  async getPortfolioAll(): Promise<Portfolio[]> {
    return await this.portFolioService.findAll();
  }

  @Get('test')
  getHello(): string[] {
    return this.portFolioService.getJobs();
  }

  @Get(':id')
  getJob(@Param('id') id) {
    return this.portFolioService.findOne(id);
  }

  @Post('add')
  @UsePipes(ValidationPipe)
  async createJob(@Body() body: CreateJobsDto): Promise<CreateJobsDto> {
    return await this.portFolioService.createPortfoilio(body);
  }

  @Delete(':id')
  @HttpCode(200)
  async deletePortfolio(@Param('id') id): Promise<void> {
    return await this.portFolioService.delete(id);
  }
}
