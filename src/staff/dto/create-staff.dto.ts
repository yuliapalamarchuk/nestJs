import { ApiProperty } from '@nestjs/swagger';

export class CreateStaffDto {
  @ApiProperty({
    description: 'Имя сотрудника',
  })
  title: string;

  @ApiProperty({
    description: 'Фамилия сотрудника',
  })
  description: string;

  @ApiProperty({
    description: 'Должность',
  })
  describing: string;
}
