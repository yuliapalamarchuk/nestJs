import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffModule } from './staff/staff.module';
import { ClientsModule } from './clients/clients.module';
import { FlatsModule } from './flats/flats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Client } from './clients/entities/client.entity';
import { Flat } from './flats/entities/flat.entity';
import { Staff } from './staff/entities/staff.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    StaffModule,
    ClientsModule,
    FlatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DBNAME,
      entities: [Client, Flat, Staff],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
