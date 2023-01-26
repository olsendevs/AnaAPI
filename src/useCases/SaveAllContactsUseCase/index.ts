import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { SaveAllContactsUseCase } from "./SaveAllContactsUseCase";

const contactRepository = new ContactRepository();

const saveAllContactsUseCase = new SaveAllContactsUseCase(
    contactRepository
);

export { saveAllContactsUseCase  }