import { iAnaProvider } from "../../provider/IAnaProvider";
import { createMessageLogUseCase } from "../CreateMessagesLogUseCase";
import { sendOrderUseCase } from "../SendOrderUseCase";

export class SendToiAnaUseCase {
    constructor(
        private iAnaProvider: iAnaProvider
    ) {}
    
    async execute(client, message, text: string): Promise<string> {
        let response = "";

        const sendToAna = await this.iAnaProvider.SendMessage(message.from, message.body);

        if(sendToAna) {
            const resFromAna = await this.iAnaProvider.GetResponse(message.from, message.body);
            if(resFromAna.includes('"Order":')) {
                response = await sendOrderUseCase.execute(client, message, resFromAna);
            } else {
                await client
                .sendText(message.from, resFromAna)
                    .then((result) => {
                        response = "message was sended.";
                    })
                    .catch((erro) => {
                        response = "error trying to send messag: " + erro.message;
                    });
                await createMessageLogUseCase.execute(message.from, message.body, resFromAna);
            }
        }

    
        return response;
    }
}