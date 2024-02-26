import { Router } from "express"
import { flightController } from "../controllers/flight.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { flightSchema } from "../schemas/flight.schemas.js"

const flightRouter = Router()

flightRouter.post("/flights", validateSchema(flightSchema), flightController.create) 
flightRouter.get("/flights", flightController.findAll) 

export default flightRouter