import { ObjectId } from "mongodb";
import { ApiError, BadRequestError, NotFoundError } from "../../helpers/api-errors";
import { Message } from "venom-bot";
import { createMessageLogUseCase } from "../CreateMessagesLogUseCase";

export class SendPaymentVoucherUseCase {
    constructor(
     
    ) {}
    async execute(client, chatId: string, image: string): Promise<string> {
        let response = "";
        const image_name = "voucher-" + chatId + "-" + Date.now();
        const message_text =  "Segue o comprovante do seu pedido! Agora é só aguardar que em alguns minutos você ira receber sua entrega. Obrigado pela preferencia 🙏🥳🤤"
        await client.sendImageFromBase64(chatId, image, image_name, message_text)
        .then((result) => {
            response = image_name + " was sended.";
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
        await createMessageLogUseCase.execute(chatId, image, response);
        return response;
    }
}