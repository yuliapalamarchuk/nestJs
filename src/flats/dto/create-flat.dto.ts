import { ApiProperty } from '@nestjs/swagger';

export class CreateFlatDto {
  @ApiProperty({
    description: 'Адрес квартиры',
  })
  title: string;

  @ApiProperty({
    description: 'Тип дома',
  })
  description: string;

  @ApiProperty({
    description: 'Сотрудник',
  })
  staffID: number;
}
