import { v4 as uuidv4 } from 'uuid';

export class Mensagem {
    public readonly id: string;
    public body: string;
    public chatId: string;
    public sendDate: Date;
    public response: string;

    constructor(props: Omit<Mensagem, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id) {
            this.id = uuidv4();
        }
    }
}
