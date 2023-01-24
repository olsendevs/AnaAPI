import { iAnaProvider } from "../../provider/IAnaProvider";
import { IChatRepository } from "../../repositories/IChatRepository";

export class CreateChatLogUseCase {
    constructor(
        private iChatRepository: IChatRepository
    ) {}
    
    async execute(chatId: string, text: string): Promise<boolean> {
        const saved_chat = await this.iChatRepository.save(text, chatId);
        if(saved_chat){
            return true;
        } else {
            return false;
        }
    }
}