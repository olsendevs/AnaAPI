import { Order } from "../../entities/Order";
import { IPdvProvider } from "../../provider/IPdvProvider";
import { IOrderRepository } from "../../repositories/IOrderRepository";
import { createMessageLogUseCase } from "../CreateMessagesLogUseCase";

export class SendOrderUseCase {
    constructor(
        private orderRepository: IOrderRepository,
        private pdvProvider: IPdvProvider
    ) {}
    
    async execute(client, message, order_string: string): Promise<string> {
        const order = JSON.parse(order_string);

        const order_entity = order.Order as unknown as Order;

        let response_to_client =  'Seu pedido foi anotado com sucesso!! 🎉🥳🫡😁\nEsses foram os itens que você solicitou:\n';
        order_entity.products.map((item) => {
            response_to_client += '\n - ' + item;
        });
        response_to_client += '\n \nO total do seu pedido ficou: R$' + order_entity.price.toFixed(2) +
        '\n \nCopie o código pix abaixo ou clique no QRCode para realizar o pagamento do seu pedido! 💵📲';

        const pixCodes = await this.pdvProvider.GetPixCode(order_entity.price);
        let response = '';
        await client
        .sendText(order_entity.chatId, response_to_client)
            .then((result) => {
                response = "message was sended.";
            })
            .catch((erro) => {
                response = "error trying to send messag: " + erro.message;
            });

        await client.sendText(order_entity.chatId, pixCodes.code)
            .then((result) => {
                response = "Pix code was sended.";
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });

        await client.sendImageFromBase64(order_entity.chatId, pixCodes.qrCode, "comprovante-qrcode.png", "Clique aqui para realizar o pagamento!")
        .then((result) => {
            response = "comprovante-qrcode.png" + " was sended.";
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });    

        await createMessageLogUseCase.execute(order_entity.chatId, message.body, response_to_client);
        await this.orderRepository.save(order_entity);
        return response;
    }
}