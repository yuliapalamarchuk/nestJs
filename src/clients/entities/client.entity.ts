// import { Staff } from 'src/staff/entities/staff.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum clientStatusEnum {
  DRAW = 'Черновик',
  PUBLISHED = 'Клиент добавлен',
  DELETED = 'Клиент удален',
}

@Entity()
export class Client {
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
  staff_id: number;

  @ApiProperty()
  @Column()
  phone: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: clientStatusEnum,
    default: clientStatusEnum.DRAW,
  })
  status: clientStatusEnum;
}
