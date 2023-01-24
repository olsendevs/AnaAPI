export interface iAnaProvider {
    SendMessage(chatId: string, text: string): Promise<boolean>;
    GetResponse(chatId: string, text: string): Promise<string>;
}