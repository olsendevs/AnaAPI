import { saveAllContactsUseCase } from "../useCases/SaveAllContactsUseCase";

export default function saveAllContactsThread(client) {
    saveAllContactsUseCase.execute(client);
}