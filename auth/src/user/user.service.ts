import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users = []

    createUser(userData: any) {
        this.users.push(userData)
        return userData
    }

    getAllUsers() {
        return this.users
    }
}
