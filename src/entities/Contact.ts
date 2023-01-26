import { ObjectId } from "mongodb";
import { Id } from "./Id";


export class Contact {
    public readonly _id: ObjectId;
    formattedName: string;
    id: Id;
    isBusiness: boolean;
    isEnterprise: boolean;
    isHighLevelVerified: any;
    isMe: boolean;
    isMyContact: boolean;
    isPSA: boolean;
    isUser: boolean;
    isVerified: any;
    isWAContact: boolean;
    labels: any[];
    msgs: any;
    name: string;
    plaintextDisabled: boolean;
    profilePicThumbObj: {
      eurl: string;
      id: Id;
      img: string;
      imgFull: string;
      raw: any;
      tag: string;
    };
    pushname: string;
    sectionHeader: any;
    shortName: string;
    statusMute: boolean;
    type: string;
    verifiedLevel: any;
    verifiedName: any;

    constructor(props: Omit<Contact, '_id'>, _id?: string){
        Object.assign(this, props);

        if(!_id){
            this._id = new ObjectId();
        }
    }
}
