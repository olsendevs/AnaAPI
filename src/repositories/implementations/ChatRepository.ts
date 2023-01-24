import { Mensagem } from "../../entities/Mensagem";
import { IChatRepository } from "../IChatRepository";

export class ChatRepository implements IChatRepository{
    save(msg: string, chatId: string): Promise<Mensagem[]> {
        throw new Error("Method not implemented.");
    }
    update(msg: string, chatId: string): Promise<Mensagem[]> {
        throw new Error("Method not implemented.");
    }
    findByChatId(chatId: string): Promise<Mensagem[]> {
        throw new Error("Method not implemented.");
    }


}