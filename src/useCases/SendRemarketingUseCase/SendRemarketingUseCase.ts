import { IContactRepository } from "../../repositories/IContactRepository";
import "dotenv/config";

export class SendRemarketingUseCase  {
    constructor(
        private iContactRepository: IContactRepository
    ) {}
    
    async execute(client, id: string): Promise<void> {
        await client.sendText(id, process.env.REMARKETING_TEXT);
    }
}