import express, { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-errors";

export const testRouter = express.Router();

testRouter.use(express.json());

testRouter.get('/', (request, response) => {
    const data = {
        uptime: process.uptime(),
        message: "Ok",
        date: new Date(),
      };
    
      response.status(200).send(data);
});
