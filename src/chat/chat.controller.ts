import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @Get()
    async getHello(): Promise<string> {
        return this.chatService.generateText();
    }

    @Post()
    async create(@Body() query: string) {
        let message = await this.chatService.generateBasedOnQuery(query);
        return {message:message};
    }
}
