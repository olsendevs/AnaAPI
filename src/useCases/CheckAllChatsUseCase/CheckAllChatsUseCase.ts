import { IContactRepository } from "../../repositories/IContactRepository";
import "dotenv/config";
import { sendRemarketingUseCase } from "../SendRemarketingUseCase";

export class CheckAllChatsUseCase  {
    constructor(
        private iContactRepository: IContactRepository
    ) {}
    
    async execute(client): Promise<void> {
        const contacts = await this.iContactRepository.listAll();
        contacts.map(async (contact) =>{
                const chat = await client.getAllMessagesInChat(contact.id._serialized);
            
                if(chat[chat.length - 1].sender.isMe && chat[chat.length - 1].body != process.env.REMARKETING_TEXT){
                    sendRemarketingUseCase.execute(client, contact.id._serialized);
                }
        });
    }
}