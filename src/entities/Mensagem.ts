import { v4 as uuidv4 } from 'uuid';

export class Mensagem {
    public readonly _id: string;

    public name: string;
    public email: string;

    constructor(props: Omit<Mensagem, '_id'>, _id?: string){
        Object.assign(this, props);

        if(!_id) {
            this._id = uuidv4();
        }
    }
}
