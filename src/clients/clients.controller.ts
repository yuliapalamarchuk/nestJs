import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
// import { ClientsModule } from './clients.module';
import { Client as clientEntity } from './entities/client.entity';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptors';

@ApiTags('Clients')
@ApiBearerAuth()
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiResponse({
    status: 201,
    description: 'Клиент успешно добавлен',
    type: clientEntity,
  })
  @ApiResponse({ status: 401, description: 'Ошибка' })
  @Post()
  create(@Body() CreateClientDto: CreateClientDto) {
    return this.clientsService.create(CreateClientDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @UseInterceptors(LoggingInterceptor)
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.clientsService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, UpdateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
