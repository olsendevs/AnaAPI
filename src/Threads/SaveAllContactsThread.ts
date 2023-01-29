import { saveAllContactsUseCase } from "../useCases/SaveAllContactsUseCase";

export default function saveAllContactsThread(client) {
    setInterval(() => {
        saveAllContactsUseCase.execute(client);
    }, ((1000 * 60) * 60) * 24);
}