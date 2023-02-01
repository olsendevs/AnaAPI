import { checkAllChatsUseCase } from "../useCases/CheckAllChatsUseCase";

export default function checkAllChatsThread(client) {
    checkAllChatsUseCase.execute(client);
}