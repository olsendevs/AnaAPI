import { iAnaProvider } from "../IAnaProvider";

export class AnaProvider implements iAnaProvider {
    async SendMessage(chatId: string, text: string): Promise<boolean> {
        return true;
    }
    async GetResponse(chatId: string, text: string): Promise<string> {
        //return "Essa é a resposta da iAna para o usuário: " + chatId;
        return '{"Order":{"price":61.90,"chatId":"5511998133499@c.us","createDate":"2023-01-29","address":"Rua Rita Gamero Pires 112","userName":"João Vitor Olsen","products":["pizza grande de frango com catupry","coca-cola de 2 litros"]}}';
    }

}