import { checkKeywordsUseCase } from "../useCases/CheckKeywordsUseCase";
import { sendImageUseCase } from "../useCases/SendImageUseCase";
import { sendMessageUseCase } from "../useCases/SendMessageUseCase";
import { sendToiAnaUseCase } from "../useCases/SendToiAnaUseCase";

export default function start(client) {
  client.onMessage(async (message) => {
    const haveBadWords = await checkKeywordsUseCase.execute(client, message, "caralho, porra, buceta, filha da puta, puta" +
    ", cacete, pinto, penis, cacete, fuder, fude, fode, foder, sexo, trepar, transar, cu, pau, piroca, arrombado, arrombada" +
    ", putinha, putona, corno")
    if(haveBadWords){
        const resOnSendMessage = await sendMessageUseCase.execute(client, message, "Não envie palavrões! "
        + "Utilize apenas palavras relacionadas ao seu pedido.");
    } else {
        const haveOrderWords = await checkKeywordsUseCase.execute(client, message, "cardápio, cardapio, menu, lista de opções, lista de pratos, lista de refeições"
        + ", lista de comidas, pratos, sabores, sabor, opções")
        if(haveOrderWords){
            const resOnSedImage = await sendImageUseCase.execute(client, message, "Segue o cardápio", "./wwwroot/img/cardapio.png" , "cardapio")
        } else {
            const resByiAna = await sendToiAnaUseCase.execute(client, message, message.body);
            console.log(resByiAna);
        }
        // const resOnSendMessage = await sendMessageUseCase.execute(client, message, "olá mundo");
    }
 
  });
}