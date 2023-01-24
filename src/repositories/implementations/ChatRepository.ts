import { Mensagem } from "../../entities/Mensagem";
import { collections } from "../../services/mongodb.service";
import { IChatRepository } from "../IChatRepository";

export class ChatRepository implements IChatRepository{
    async save(msg: string, chatId: string, response: string): Promise<void> {
        const new_chat = new Mensagem({
            body: msg,
            chatId,
            sendDate: new Date(),
            response
        })
        await collections.chats.insertOne(new_chat);
    }
    update(msg: string, chatId: string): Promise<Mensagem[]> {
        throw new Error("Method not implemented.");
    }
    findByChatId(chatId: string): Promise<Mensagem[]> {
        throw new Error("Method not implemented.");
    }


}