import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { StackService } from './stack.service';

@Controller('stack')
export class StackController {
  constructor(private stackService: StackService) {}

  @Post()
  addStack(@Body() stack): Promise<any> {
    return this.stackService.addStack(stack);
  }

  @Get()
  getAllStack(): Promise<any> {
    return this.stackService.findAll();
  }

  @Get('/:id')
  getPortfolioStack(@Param('id') id): Promise<any> {
    return this.stackService.findOne(id);
  }

  @Patch('/:id')
  updateStack(@Param('id') id, @Body() stack): Promise<any> {
    return this.stackService.update(stack);
  }

  @Delete('/:id')
  deleteStack(@Param('id') id): Promise<any> {
    return this.stackService.delete(id);
  }
}
