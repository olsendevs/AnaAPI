import { ObjectId } from 'mongodb';

export class Voucher {
    public readonly _id: ObjectId;
    public image: string;
    public chatId: string;
    public sendDate: Date;

    constructor(props: Omit<Voucher, '_id'>, _id?: string){
        Object.assign(this, props);

        if(!_id){
            this._id = new ObjectId();
        }
    }
}
