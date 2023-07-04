import {
  Controller,
  Request,
  Post,
  Body,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { ClientsService } from './clients/clients.service';
import {
  CreateClientDto,
  CreateClientSchema,
} from './clients/dto/create-client.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { JoiValidationPipe } from './pipes/ValidationPipe';

AuthService;
@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(
    private readonly ClientsService: ClientsService,
    private readonly AuthService: AuthService,
  ) {}

  @Post('auth/register')
  @UsePipes(new JoiValidationPipe(CreateClientSchema))
  register(@Body() CreateClientDto: CreateClientDto) {
    return this.ClientsService.register(CreateClientDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.AuthService.login(req.user);
  }
}
