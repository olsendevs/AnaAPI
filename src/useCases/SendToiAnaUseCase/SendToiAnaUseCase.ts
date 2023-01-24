import { iAnaProvider } from "../../provider/IAnaProvider";

export class SendToiAnaUseCase {
    constructor(
        private iAnaProvider: iAnaProvider
    ) {}
    
    async execute(client, message, text: string): Promise<string> {
        let response = "";


        await client
        .sendText(message.from, text)
            .then((result) => {
                response = "message was sended.";
            })
            .catch((erro) => {
                response = "error trying to send messag: " + erro.message;
            });
        return response;
    }
}