import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { CheckAllChatsUseCase } from "./CheckAllChatsUseCase";

const contactRepository = new ContactRepository();

const checkAllChatsUseCase = new CheckAllChatsUseCase(
    contactRepository
);

export { checkAllChatsUseCase }