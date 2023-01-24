import { AnaProvider } from "../../provider/implementations/AnaProvider";
import { ChatRepository } from "../../repositories/implementations/ChatRepository";
import { CreateChatLogUseCase } from "./CreateChatLogUseCase";

const chatRepository = new ChatRepository(); 

const createChatLogUseCase = new CreateChatLogUseCase(
    chatRepository
);

export { createChatLogUseCase  }