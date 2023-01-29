import { Contact } from "../entities/Contact";


export interface IMauticProvider {
    SendToMautic(contact: Contact): Promise<void>;
}