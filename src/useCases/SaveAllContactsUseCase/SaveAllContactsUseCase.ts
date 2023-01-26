import { IContactRepository } from "../../repositories/IContactRepository";
import { Contact } from "../../entities/Contact";

export class SaveAllContactsUseCase  {
    constructor(
        private iContactRepository: IContactRepository
    ) {}
    
    async execute(client): Promise<void> {
        try {
        const contacts = await client.getAllChatsContacts();
        contacts.map(async (index) =>{
            const contactAlreadyExists = await this.iContactRepository.findById(index.id);

            if(!contactAlreadyExists){
                const contact_object = new Contact(index.contact);
                await this.iContactRepository.save(contact_object);
                console.log("contact saved: " + contact_object.name);
            } else {
                const contact_object = new Contact(index.contact, index._id);
                await this.iContactRepository.update(contact_object);
                console.log("contact updated: " + contact_object.name);
            }
        });
        
        } catch(error){
            console.log(error); 
        }
    }
}