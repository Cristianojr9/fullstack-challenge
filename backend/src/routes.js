import { Router } from "express";

import ProfessionController from "./app/controllers/ProfessionController";

const routes = new Router();

routes.post("/profession", ProfessionController.store);
routes.get("/professions", ProfessionController.index);

export default routes;