import { Injectable } from '@nestjs/common';
import { UsersRepository } from './user.repository';
import { CreateUserDto, FiltersUsersDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getUsers(params?: FiltersUsersDto) {
    return this.usersRepository.getUsers(params);
  }

  getUserByEmail(email: string){
    return this.usersRepository.getUserByEmail(email);
  }

  addUser(user: CreateUserDto) {
    return this.usersRepository.addUser(user);
}
}
