import { Contact } from "../../entities/Contact";
import { IMauticProvider } from "../../provider/IMauticProvider";
import { IContactRepository } from "../../repositories/IContactRepository";
import "dotenv/config";

export class SendRemarketingUseCase  {
    constructor(
        private mauticProvider: IMauticProvider
    ) {}
    
    async execute(client, contact: Contact ): Promise<void> {
        await client.sendText(contact.id._serialized, process.env.REMARKETING_TEXT);
        this.mauticProvider.SendToMautic(contact);
    }
}