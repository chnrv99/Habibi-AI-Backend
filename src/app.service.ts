import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
@Injectable()
export class AppService {
  constructor(private jwtService: JwtService,
    private usersService: UsersService
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    const payload ={
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      picture: req.user.picture,
    }

    const jwt = this.jwtService.sign(payload);
    const user = await this.usersService.create(req.user.email);

    return {
      message: 'User information from google',
      user: req.user,
      jwt,
    };
  }
}
