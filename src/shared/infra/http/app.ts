import "reflect-metadata";
import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import createConnection from "@shared/infra/typeorm";

import swaggerFile from "../../../swagger.json";
import handleExceptions from "./middlewares/handleExceptions";
import { router } from "./routes";
import "@shared/container";

createConnection();
const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(handleExceptions);

export { app };
