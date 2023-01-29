import { getVouchersFromPdvUseCase } from "../useCases/GetVouchersFromPdvUseCase";

export default function getVouchersFromPdvThread(client) {
    setInterval(() => {
        getVouchersFromPdvUseCase.execute(client);
    }, ((1000 * 60) * 0.5));
}