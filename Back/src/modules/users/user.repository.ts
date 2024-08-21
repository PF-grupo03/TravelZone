import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FiltersUsersDto } from './user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async getUsers(params?: FiltersUsersDto) {
    const { limit, offset, name, email } = params;
    return await this.usersRepository.find({
      where: {
        name: name || undefined,
        email: email || undefined,
      },
      take: limit,
      skip: offset,
    });
  }
}
