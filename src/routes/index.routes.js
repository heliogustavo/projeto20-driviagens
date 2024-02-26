import { Router } from "express"
import cityRouter from "./city.routes.js"
import passengerRouter from "./passenger.routes.js"
import travelRouter from "./travel.routes.js"
import flightRouter from "./flight.routes.js"

const router = Router()

router.use(cityRouter)
router.use(passengerRouter)
router.use(travelRouter)
router.use(flightRouter)

export default router