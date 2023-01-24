import { iAnaProvider } from "../../provider/IAnaProvider";

export class SendToiAnaUseCase {
    constructor(
        private iAnaProvider: iAnaProvider
    ) {}
    
    async execute(client, message, text: string): Promise<string> {
        let response = "";

        const sendToAna = await this.iAnaProvider.SendMessage(message.from, message.body);

        if(sendToAna) {
            const resFromAna = await this.iAnaProvider.GetResponse(message.from, message.body)
            await client
            .sendText(message.from, resFromAna)
                .then((result) => {
                    response = "message was sended.";
                })
                .catch((erro) => {
                    response = "error trying to send messag: " + erro.message;
                });
        }


        return response;
    }
}