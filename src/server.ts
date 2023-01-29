import checkAllChatsThread from "./Threads/CheckAllChatsThread";
import getVouchersFromPdvThread from "./Threads/GetVouchersFromPdvThread";
import saveAllContactsThread from "./Threads/SaveAllContactsThread";
import { app } from "./app";
import { errorMiddleware } from "./middlewares/error";
import { connectToDatabase } from "./services/mongodb.service";
import start from "./services/venom.service";
import { checkAllChatsUseCase } from "./useCases/CheckAllChatsUseCase";
import { getVouchersFromPdvUseCase } from "./useCases/GetVouchersFromPdvUseCase";
import { saveAllContactsUseCase } from "./useCases/SaveAllContactsUseCase";

app.use(errorMiddleware);
        

connectToDatabase()
    .then(() => {
        const venom = require('venom-bot');

        venom
        .create({
            session: 'ana-api', 
            multidevice: true 
        })
        .then((client) => {
            start(client);

            getVouchersFromPdvThread(client);

            checkAllChatsThread(client);

            saveAllContactsThread(client);

        })
        .catch((erro) => {
            console.log(erro);
        });

        app.use(errorMiddleware);
        
        app.listen(3000, () => {
            console.log(`A.N.A. API is running on http://localhost:3000`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });



