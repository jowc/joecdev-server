import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PortfolioService } from '../services/portfolio.service';
import { CreatePortfolioDto, PortfolioResponseDto } from '../dto/portfolio.dto';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portFolioService: PortfolioService) {}

  @Get()
  async getPortfolioAll(): Promise<PortfolioResponseDto[]> {
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

  @Post('')
  @UsePipes(ValidationPipe)
  async createJob(@Body() body: CreatePortfolioDto) {
    return await this.portFolioService.createPortfoilio(body);
  }

  @Patch(':id')
  updateJob(@Param('id') id, @Body() body: CreatePortfolioDto) {
    return this.portFolioService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(200)
  async deletePortfolio(@Param('id') id): Promise<any> {
    return await this.portFolioService.delete(+id);
  }
}
