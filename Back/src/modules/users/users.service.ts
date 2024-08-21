import { Injectable } from '@nestjs/common';
import { UsersRepository } from './user.repository';
import { FiltersUsersDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getUsers(params?: FiltersUsersDto) {
    return this.usersRepository.getUsers(params);
  }
}
