import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UnsupportedMediaTypeException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor() {}

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file.mimetype.includes('image'))
      throw new UnsupportedMediaTypeException();
    console.log(file);
  }
}
