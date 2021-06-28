import { Router } from "express";

import ProfessionController from "./app/controllers/ProfessionController";
import ProfissionalController from "./app/controllers/ProfessionalController";

const routes = new Router();

// PROFESSION ROUTES 
routes.post("/profession", ProfessionController.store);
routes.get("/professions", ProfessionController.index);
routes.get("/profession/:id", ProfessionController.show);
routes.put("/profession/:id", ProfessionController.update);

routes.post("/professional", ProfissionalController.store);

export default routes;