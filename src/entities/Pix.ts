import { ObjectId } from 'mongodb';

export class Pix {
    public qrCode: string;
    public code: string;

    constructor(props: Pix){
        Object.assign(this, props);
    }
}
