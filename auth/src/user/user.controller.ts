import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @MessagePattern('create_user')
  createUser(userData: any) {
    return this.userService.createUser(userData)
  }

  @MessagePattern('get_all_users')
  getAllUsers() {
    return this.userService.getAllUsers()
  }
}
