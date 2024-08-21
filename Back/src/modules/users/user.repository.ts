import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, FiltersUsersDto } from './user.dto';

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

  async getUserByEmail(email: string): Promise<UserEntity> {
    try {
      const userByEmail = await this.usersRepository.findOneBy({ email });
        if (!userByEmail) throw new NotFoundException('Usuario no encontrado');
        return userByEmail;
    } catch (error) {
        if (error instanceof NotFoundException) {
             throw error; // Propaga el error NotFoundException
        }
        throw new InternalServerErrorException('Error al obtener el usuario por email: ' + error.message);
    }
  }

  async addUser(user: CreateUserDto): Promise<Partial<UserEntity>> {
    try {

        const existingUser = await this.usersRepository.findOneBy({ email: user.email });
        if (existingUser) {
            throw new BadRequestException('El usuario con este email ya existe');
        }
        
        const newUser = await this.usersRepository.save(user);

        const dbUser = await this.usersRepository.findOneBy({ id: newUser.id });
        if (!dbUser) throw new InternalServerErrorException(`Error al recuperar el usuario recién creado con id ${newUser.id}`);

        const { password, IsAdmin, ...userNoPassword } = dbUser;
        return userNoPassword;
        
    } catch (error) {
        throw new BadRequestException('Error al agregar el usuario: ' + error.message);
    }
  }
}
