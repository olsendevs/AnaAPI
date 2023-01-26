import { Contact } from "../entities/Contact";

export interface IContactRepository {
    save(contact: Contact): Promise<void>
    update(contact: Contact): Promise<void>
    findById(chatId: string): Promise<Contact>
    listAll(): Promise<Contact[]>
}