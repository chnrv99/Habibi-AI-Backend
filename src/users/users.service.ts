import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) public userModel: Model<User>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        console.log(createUserDto);
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findOne(email: string): Promise<User[]> {
        return this.userModel.find({ email: email }).exec();
    }
}
