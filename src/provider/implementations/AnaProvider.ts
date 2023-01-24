import { iAnaProvider } from "../IAnaProvider";

export class AnaProvider implements iAnaProvider {
    SendMessage(chatId: string, text: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    GetResponse(chatId: string, text: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

}