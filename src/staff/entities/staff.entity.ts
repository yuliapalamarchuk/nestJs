import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum staffStatusEnum {
  DRAW = 'Черновик',
  PUBLISHED = 'Сотрудник добавлен',
  DELETED = 'Ошибка',
}

@Entity()
export class Staff {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column()
  position: string;

  @ApiProperty()
  @Column()
  phone: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: staffStatusEnum,
    default: staffStatusEnum.DRAW,
  })
  status: staffStatusEnum;
}
