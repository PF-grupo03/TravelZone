import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/user.entity';
import { UsersRepository } from '../users/user.repository';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [AuthService, UsersRepository, GoogleStrategy]
})
export class AuthModule {}
