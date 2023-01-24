import { MongoNetworkError } from "mongodb";
import { Mensagem } from "../entities/Mensagem";

export interface IChatRepository {
    save(msg: string, chatId: string, response: string): Promise<void>
    update(msg: string, chatId: string): Promise<Mensagem[]>
    findByChatId(chatId: string): Promise<Mensagem[]>
}