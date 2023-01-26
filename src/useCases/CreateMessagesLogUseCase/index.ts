import { MessageRepository } from "../../repositories/implementations/MessageRepository";
import { CreateMessageLogUseCase } from "./CreateMessageLogUseCase";

const messageRepository = new MessageRepository(); 

const createMessageLogUseCase = new CreateMessageLogUseCase(
    messageRepository
);

export { createMessageLogUseCase  }