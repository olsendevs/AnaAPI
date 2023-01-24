import { iAnaProvider } from "../IAnaProvider";

export class AnaProvider implements iAnaProvider {
    async SendMessage(chatId: string, text: string): Promise<boolean> {
        return true;
    }
    async GetResponse(chatId: string, text: string): Promise<string> {
        return "Essa é a resposta da iAna para o usuário: " + chatId;
    }

}