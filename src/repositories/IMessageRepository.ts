import { MongoNetworkError } from "mongodb";
import { Message } from "../entities/Message";

export interface IMessageRepository {
    save(msg: string, chatId: string, response: string): Promise<void>
    update(msg: string, chatId: string): Promise<Message[]>
    findByChatId(chatId: string): Promise<Message[]>
}