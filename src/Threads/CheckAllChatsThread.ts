import { checkAllChatsUseCase } from "../useCases/CheckAllChatsUseCase";

export default function checkAllChatsThread(client) {
    setInterval(() => {
        checkAllChatsUseCase.execute(client);
    }, ((1000 * 60) * 60) * 4);
}