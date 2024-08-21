import { Injectable } from '@nestjs/common';
import { UsersRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getUsers() {
    return this.usersRepository.getUsers();
  }
}
