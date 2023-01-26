import { IMessageRepository } from "../../repositories/IMessageRepository";

export class CreateMessageLogUseCase {
    constructor(
        private iMessageRepository: IMessageRepository
    ) {}
    
    async execute(chatId: string, text: string, response: string): Promise<void> {
        const saved_message = await this.iMessageRepository.save(text, chatId, response);
    }
}