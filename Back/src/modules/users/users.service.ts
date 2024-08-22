import { Injectable } from '@nestjs/common';
import { UsersRepository } from './user.repository';
import { CreateUserDto, FiltersUsersDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getUsers(params?: FiltersUsersDto) {
    return this.usersRepository.getUsers(params);
  }

  getUserById(id: string) {
    return this.usersRepository.getUserById(id);
  }

  async updateUser(id: string, userBody: UpdateUserDto) {
    return await this.usersRepository.updateUser(id, userBody);
  }

  async deleteUser(id: string) {
    return await this.usersRepository.deleteUser(id);
    
  }

  getUserByEmail(email: string) {
    return this.usersRepository.getUserByEmail(email);
  }

  addUser(user: CreateUserDto) {
    return this.usersRepository.addUser(user);
  }
}
