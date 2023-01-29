import { AnaProvider } from "../../provider/implementations/AnaProvider";
import PdvProvider from "../../provider/implementations/PdvProvider";
import { OrderRepository } from "../../repositories/implementations/OrderRepository";
import { SendOrderUseCase } from "./SendOrderUseCase";

const orderRepository = new OrderRepository(); 
const pdvProvider = new PdvProvider();

const sendOrderUseCase = new SendOrderUseCase(
    orderRepository,
    pdvProvider
);

export { sendOrderUseCase  }