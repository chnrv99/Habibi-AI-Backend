import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

import { UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @Get()
    async getHello(): Promise<string> {
        return this.chatService.generateText();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() query: string, @Req() req){
        let message = await this.chatService.generateBasedOnQuery(query);
        return {message:message};
    }
}
