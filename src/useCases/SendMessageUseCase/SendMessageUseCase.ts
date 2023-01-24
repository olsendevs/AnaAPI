import { createChatLogUseCase } from "../CreateChatLogUseCase";

export class SendMessageUseCase {
    constructor(
     
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

        await createChatLogUseCase.execute(message.from, message.body, text);

        return response;
    }
}