import { app } from "./app";
import { errorMiddleware } from "./middlewares/error";

app.use(errorMiddleware);
        
app.listen(3000, () => {
    console.log(`A.N.A. API is running on http://localhost:3000`);
});