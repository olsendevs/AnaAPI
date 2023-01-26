import { ObjectId } from 'mongodb';

export class Message {
    public readonly _id: ObjectId;
    public body: string;
    public chatId: string;
    public sendDate: Date;
    public response: string;

    constructor(props: Omit<Message, '_id'>, _id?: string){
        Object.assign(this, props);

        if(!_id){
            this._id = new ObjectId();
        }
    }
}
