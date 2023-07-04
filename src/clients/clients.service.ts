import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private repository: Repository<Client>,
  ) {}

  async create(data: CreateClientDto) {
    try {
      const client = await this.repository.save(data);
      return client;
    } catch (err) {
      console.log(err);
    }
  }

  async register(data: CreateClientDto) {
    try {
      console.log(data);
      const saltOrRounds = 10;
      data.password = await bcrypt.hash(data.password, saltOrRounds);
      return this.repository.save(data);
    } catch (error) {
      console.log(error);
    }
  }

  async login(data: CreateClientDto) {
    try {
      const client = await this.repository.findOneBy({ email: data.email });
      if (!client) {
        return false;
      }
      return await bcrypt.compare(data.password, client.password);
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    return this.repository.find();
  }

  findOne(email: string) {
    return this.repository.findOneBy({ email });
  }
  findOneById(id: number) {
    return `This action returns a #${id} flat`;
  }

  update(id: number, data: UpdateClientDto) {
    return this.repository.save({ ...data, id });
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
