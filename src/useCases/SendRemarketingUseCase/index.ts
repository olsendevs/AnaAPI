import { MauticProvider } from "../../provider/implementations/MauticProvider";
import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { SendRemarketingUseCase } from "./SendRemarketingUseCase";

const mauticProvider = new MauticProvider();

const sendRemarketingUseCase = new SendRemarketingUseCase(
    mauticProvider
);

export { sendRemarketingUseCase }