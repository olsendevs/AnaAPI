import PdvProvider from "../../provider/implementations/PdvProvider";
import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { GetVouchersFromPdvUseCase } from "./GetVouchersFromPdvUseCase";

const contactRepository = new ContactRepository();
const pdvProvider = new PdvProvider();

const getVouchersFromPdvUseCase = new GetVouchersFromPdvUseCase(
    contactRepository,
    pdvProvider
);

export { getVouchersFromPdvUseCase }