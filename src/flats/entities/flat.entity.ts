import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum flatStatusEnum {
  DRAW = 'Черновик',
  PUBLISHED = 'Опубликован',
  DELETED = 'Снято с публикации',
}

@Entity()
export class Flat {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  adress: string;

  @ApiProperty()
  @Column()
  type_of_house: string;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @Column()
  price_per_meter: number;

  @ApiProperty()
  @Column()
  staff_id: number;

  @ApiProperty()
  @Column()
  repair: string;

  @ApiProperty()
  @Column()
  floor: number;

  @ApiProperty()
  @Column()
  meters: number;

  @ApiProperty()
  @Column()
  category: string;

  @ApiProperty()
  @Column()
  number_of_rooms: number;

  @ApiProperty()
  @Column()
  number_of_floors: number;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: flatStatusEnum,
    default: flatStatusEnum.DRAW,
  })
  status: flatStatusEnum;
}
