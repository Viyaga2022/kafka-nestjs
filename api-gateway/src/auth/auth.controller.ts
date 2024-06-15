import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  createUser(@Body() userData: any) {
    return this.authService.createUser(userData)
  }

  @Get()
  getAllUsers() {
    return this.authService.getAllUsers()
  }
}
