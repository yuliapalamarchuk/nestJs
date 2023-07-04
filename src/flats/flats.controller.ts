import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FlatsService } from './flats.service';
import { CreateFlatDto } from './dto/create-flat.dto';
import { UpdateFlatDto } from './dto/update-flat.dto';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Flat as flatEntity } from './entities/flat.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Flats')
@ApiBearerAuth()
@Controller('flats')
export class FlatsController {
  constructor(private readonly flatsService: FlatsService) {}

  @ApiResponse({
    status: 201,
    description: 'Квартира успешно добавлена',
    type: flatEntity,
  })
  @ApiResponse({ status: 401, description: 'Квартира не добавлена' })
  @Post()
  create(@Body() createFlatDto: CreateFlatDto) {
    return this.flatsService.create(createFlatDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.flatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlatDto: UpdateFlatDto) {
    return this.flatsService.update(+id, updateFlatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flatsService.remove(+id);
  }
}
