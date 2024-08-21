import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { FiltersUsersDto } from './user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getUsers(@Query() params?: FiltersUsersDto) {
        return this.userService.getUsers(params);
    }
}
