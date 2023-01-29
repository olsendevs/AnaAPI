import { checkKeywordsUseCase } from "../useCases/CheckKeywordsUseCase";
import "dotenv/config";
import { sendImageUseCase } from "../useCases/SendImageUseCase";
import { sendMessageUseCase } from "../useCases/SendMessageUseCase";
import { sendToiAnaUseCase } from "../useCases/SendToiAnaUseCase";

export default function start(client) {
  client.onMessage(async (message) => {
    if(!message.isGroupMsg) {
      if(!message.isMedia){
        const haveBadWords = await checkKeywordsUseCase.execute(client, message, process.env.BADWORDS_KEYWORDS);
        if(haveBadWords){
            const resOnSendMessage = await sendMessageUseCase.execute(client, message, "Não envie palavrões! "
            + "Utilize apenas palavras relacionadas ao seu pedido.");
        } else {
            const haveOrderWords = await checkKeywordsUseCase.execute(client, message, process.env.MENU_KEYWORDS);
            if(haveOrderWords){
                const resOnSedImage = await sendImageUseCase.execute(client, message, "Segue o cardápio", "./wwwroot/img/cardapio.png" , "cardapio")
            } else {
                const resByiAna = await sendToiAnaUseCase.execute(client, message, message.body);
                console.log(resByiAna);
            }
        }    
      } else {
        const resOnSendMessage = await sendMessageUseCase.execute(client, message, "Mande apenas mensagens! ❌ Não aceitamos audios (por enquanto... 😉), imagens ou vídeos.");
      }
    }
  });
}