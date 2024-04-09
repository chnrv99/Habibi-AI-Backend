import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';



@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createCatDto: CreateUserDto) {
        await this.usersService.create(createCatDto);
    }

    @Get(':email')
    async findOne(@Param('email') email: string): Promise<User[]> {
        return this.usersService.findOne(email);
    }


}
