import { Controller, Get, Req, UseGuards, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    return;
  }
  
  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res){
    const jwt = await this.appService.googleLogin(req);
    if (jwt === "No user from google") {
      return "No user from google"
    }
    else {
      // return the jwt token to frontend localhost:3001 in url
      
      // while deploying to production, u can use this.. but for now ill send the jwt in url
      // res.cookie('jwt', jwt, { httpOnly: true, sameSite: 'none', secure: false })
      res.redirect('http://localhost:3001?jwt=' + jwt)

    }
  }
}
