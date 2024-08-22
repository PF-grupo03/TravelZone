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
    const userUpdated = await this.usersRepository.updateUser(id, userBody);
    return {
      message: 'Usuario actualizado correctamente',
      userUpdated,
    };
  }

  async deleteUser(id: string) {
    await this.usersRepository.deleteUser(id);
    return {
      message: 'Usuario eliminado correctamente',
    };
  }

  getUserByEmail(email: string) {
    return this.usersRepository.getUserByEmail(email);
  }

  addUser(user: CreateUserDto) {
    return this.usersRepository.addUser(user);
  }
}
