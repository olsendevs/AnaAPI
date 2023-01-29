import { ObjectId } from 'mongodb';

export class Order {
    public readonly _id: ObjectId;
    public price: number;
    public chatId: string;
    public createDate: Date;
    public address: string;
    public userName: string;
    public products: string[];

    constructor(props: Omit<Order, '_id'>, _id?: string){
        Object.assign(this, props);

        if(!_id){
            this._id = new ObjectId();
        }
    }
}
