import * as express from 'express'
import controller from "../Controllers/ProfessionalController"

export default express
  .Router()
  .get("/:id", controller.show)
  .get("/", controller.index)
  .post("/", controller.store)
  .put("/:id", controller.update)