import * as express from 'express'
import controller from "../Controllers/ProfessionController"

export default express
  .Router()
  .get("/:id", controller.show)
  .get("/", controller.index)
  .post("/", controller.store)
  .put("/:id", controller.update)