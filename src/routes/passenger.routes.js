import { Router } from "express"
import { passengerController } from "../controllers/passenger.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { passengerSchema } from "../schemas/passenger.schemas.js"

const passengerRouter = Router()

passengerRouter.post("/passenger", validateSchema(passengerSchema), passengerController.create)
passengerRouter.get("/passenger/travels", passengerController.findTravels)

export default passengerRouter