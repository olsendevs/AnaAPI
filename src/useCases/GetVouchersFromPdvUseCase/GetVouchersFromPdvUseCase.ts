import { IContactRepository } from "../../repositories/IContactRepository";
import { Contact } from "../../entities/Contact";
import { IPdvProvider } from "../../provider/IPdvProvider";
import { sendPaymentVoucherUseCase } from "../SendPaymentVoucherUseCase";

export class GetVouchersFromPdvUseCase  {
    constructor(
        private iContactRepository: IContactRepository,
        private iPdvProvider: IPdvProvider
    ) {}
    
    async execute(client): Promise<void> {
        try {
            const vouchers = await this.iPdvProvider.GetAllBase64PaymentVoucher();
            if(vouchers.length > 0) {
                vouchers.map(async (voucher) => {
                    const result = await sendPaymentVoucherUseCase.execute(client, voucher.chatId, voucher.image);
                    console.log(result);
                });
            }
        } catch(error){
            console.log(error); 
        }
    }
}