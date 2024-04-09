import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { Model } from 'mongoose';
import { User, UserSchema } from './users/schemas/user.schema';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),

  MongooseModule.forRoot(process.env.MONGO_URI),
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '1d' },
  }),
    UsersModule,
    ChatModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, GoogleStrategy, JwtStrategy, UsersService],
})
export class AppModule { }
