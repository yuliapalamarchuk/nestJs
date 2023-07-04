import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff as staffEntity } from './entities/staff.entity';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Staff')
@ApiBearerAuth()
@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}


  @ApiResponse({
    status: 201,
    description: 'Сотрудник успешно добавлен',
    type: staffEntity,
  })
  @ApiResponse({ status: 401, description: 'Ошибка' })
  @Post()
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.staffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(+id, updateStaffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffService.remove(+id);
  }
}
