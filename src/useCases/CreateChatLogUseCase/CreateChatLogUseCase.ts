import { iAnaProvider } from "../../provider/IAnaProvider";
import { IChatRepository } from "../../repositories/IChatRepository";

export class CreateChatLogUseCase {
    constructor(
        private iChatRepository: IChatRepository
    ) {}
    
    async execute(chatId: string, text: string, response: string): Promise<void> {
        const saved_chat = await this.iChatRepository.save(text, chatId, response);
    }
}