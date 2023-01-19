import express from 'express';
import cors from 'cors';
import {testRouter} from "./routes/test.routes";

const app = express();

app.use(express.json());

const options: cors.CorsOptions = {
    methods: "GET, OPTIONS, PUT, POST, DELETE",
    origin: "*"
};

app.use(cors(options));

app.use("/", testRouter);

export { app }