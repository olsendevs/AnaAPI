import { Contact } from "../../entities/Contact";
import { Message } from "../../entities/Message";
import { collections } from "../../services/mongodb.service";
import { IContactRepository } from "../IContactRepository";

export class ContactRepository implements IContactRepository{
    async listAll(): Promise<Contact[]> {
        const contacts = await collections.contacts.find({}).toArray() as unknown as Contact[];
        return contacts;
    }
    async findById(chatId: string): Promise<Contact> {
        const contact = await collections.contacts.findOne({ id: chatId }) as unknown as Contact;
        return contact;
    }
    async save(contact: Contact): Promise<void> {
        await collections.contacts.insertOne(contact);
    }
    async update(contact: Contact): Promise<void> {
        await collections.contacts.updateOne({ _id: contact._id }, { $set: contact });
    }

}