import { getVouchersFromPdvUseCase } from "../useCases/GetVouchersFromPdvUseCase";

export default function getVouchersFromPdvThread(client) {
    getVouchersFromPdvUseCase.execute(client);
}