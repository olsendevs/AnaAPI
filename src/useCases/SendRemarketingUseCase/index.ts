import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { SendRemarketingUseCase } from "./SendRemarketingUseCase";

const contactRepository = new ContactRepository();

const sendRemarketingUseCase = new SendRemarketingUseCase(
    contactRepository
);

export { sendRemarketingUseCase }