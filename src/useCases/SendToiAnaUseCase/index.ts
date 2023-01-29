import { AnaProvider } from "../../provider/implementations/AnaProvider";
import { SendToiAnaUseCase } from "./SendToiAnaUseCase";

const anaProvider = new AnaProvider(); 

const sendToiAnaUseCase = new SendToiAnaUseCase(
    anaProvider
);

export { sendToiAnaUseCase }