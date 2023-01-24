import { app } from "./app";
import { errorMiddleware } from "./middlewares/error";
import { connectToDatabase } from "./services/mongodb.service";
import start from "./services/venom.service";

app.use(errorMiddleware);
        

connectToDatabase()
    .then(() => {
        const venom = require('venom-bot');

        venom
        .create({
            session: 'ana-api', 
            multidevice: true 
        })
        .then((client) => start(client))
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