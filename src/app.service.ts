import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}
  getHello(): string {
    return 'Hello World!';
  }

  googleLogin(req) {
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

    return {
      message: 'User information from google',
      user: req.user,
      jwt,
    };
  }
}
