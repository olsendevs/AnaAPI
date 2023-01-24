import { ObjectId } from "mongodb";
import { ApiError, BadRequestError, NotFoundError } from "../../helpers/api-errors";
import { Message } from "venom-bot";

export class SendImageUseCase {
    constructor(
     
    ) {}
    async execute(client, message, text: string, path: string, imageName: string): Promise<string> {
        let response = "";
        await client
        .sendImage(
          message.from,
          path,
          imageName,
          text
        )
        .then((result) => {
            response = "message was sended.";
        })
        .catch((erro) => {
            console.log(erro);
        });
        return response;
    }
}