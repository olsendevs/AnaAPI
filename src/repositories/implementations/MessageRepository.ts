import { Message } from "../../entities/Message";
import { collections } from "../../services/mongodb.service";
import { IMessageRepository } from "../IMessageRepository";

export class MessageRepository implements IMessageRepository{
    async save(msg: string, chatId: string, response: string): Promise<void> {
        const new_chat = new Message({
            body: msg,
            chatId,
            sendDate: new Date(),
            response
        })
        await collections.messages.insertOne(new_chat);
    }
    update(msg: string, chatId: string): Promise<Message[]> {
        throw new Error("Method not implemented.");
    }
    findByChatId(chatId: string): Promise<Message[]> {
        throw new Error("Method not implemented.");
    }


}