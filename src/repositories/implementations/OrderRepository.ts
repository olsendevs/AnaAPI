import { Order } from "../../entities/Order";
import { collections } from "../../services/mongodb.service";
import { IOrderRepository } from "../IOrderRepository";

export class OrderRepository implements IOrderRepository{
    async listAll(): Promise<Order[]> {
        const order = await collections.orders.find({}).toArray() as unknown as Order[];
        return order;
    }
    async findById(chatId: string): Promise<Order> {
        const contact = await collections.orders.findOne({ id: chatId }) as unknown as Order;
        return contact;
    }
    async save(contact: Order): Promise<void> {
        await collections.orders.insertOne(contact);
    }
    async update(contact: Order): Promise<void> {
        await collections.orders.updateOne({ _id: contact._id }, { $set: contact });
    }
}