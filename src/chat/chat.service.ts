import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';


@Injectable()
export class ChatService {

    async generateText(): Promise<string> {
        const googleAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)
        const geminiConfig = {
            temperature: 0.9,
            topP: 1,
            topK: 1,
            maxOutputTokens: 4096,
        };

        const geminiModel = googleAI.getGenerativeModel({
            model: 'gemini-pro',
            generationConfig: geminiConfig,
        })

        const generate = async () => {
            try {
                const prompt = "Tell me about google.";
                const result = await geminiModel.generateContent(prompt);
                const response = result.response;
                console.log(response.text());
                return response.text();
            } catch (error) {
                console.log("response error", error);
                return "error"
            }
        }
        return await generate();
    }
}
