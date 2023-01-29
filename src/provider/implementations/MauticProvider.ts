import { Contact } from "../../entities/Contact";
import { IMauticProvider } from "../IMauticProvider";

export class MauticProvider implements IMauticProvider {
    async SendToMautic(contact: Contact): Promise<void> {
        
    }

}