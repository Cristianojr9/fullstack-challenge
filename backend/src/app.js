import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";

import "./database";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes(express.Router()));

module.exports = app;