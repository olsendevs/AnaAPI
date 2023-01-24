import { ObjectId } from "mongodb";
import { ApiError, BadRequestError, NotFoundError } from "../../helpers/api-errors";
import { Message } from "venom-bot";

export class CheckKeywordsUseCase {
    constructor(
     
    ) {}
    
    async execute(client, message, keywords: string): Promise<boolean> {
        const keywords_list = keywords.split(", ");
        let result = false;
        await keywords_list.map((value) => {
            if(message.body.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
                result = true;
            }
        });
        return result;
    }
}