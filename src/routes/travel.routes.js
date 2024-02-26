import { Router } from "express"
import { travelController } from "../controllers/travel.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { travelSchema } from "../schemas/travel.schemas.js"

const travelRouter = Router()

travelRouter.post("/travels", validateSchema(travelSchema), travelController.create)

export default travelRouter