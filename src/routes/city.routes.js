import Router from "express";
import { cityController } from "../controllers/city.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { citySchema } from "../schemas/city.schemas.js"

const cityRouter = Router()

cityRouter.post("/cities", validateSchema(citySchema), cityController.create)

export default cityRouter