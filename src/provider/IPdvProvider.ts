import { Pix } from "../entities/Pix";
import { Voucher } from "../entities/Voucher";

export interface IPdvProvider {
    GetAllBase64PaymentVoucher(): Promise<Voucher[]>;
    GetPixCode(price: number): Promise<Pix>;
}