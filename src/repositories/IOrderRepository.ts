import { Order } from "../entities/Order";

export interface IOrderRepository {
    save(contact: Order): Promise<void>
    update(contact: Order): Promise<void>
    findById(chatId: string): Promise<Order>
    listAll(): Promise<Order[]>
}