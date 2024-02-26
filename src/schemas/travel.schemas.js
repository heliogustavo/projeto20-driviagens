import Joi from "joi"

export const travelSchema = Joi.object({
    passengerId: Joi.number().integer().required().min(1),
    flightId: Joi.number().integer().required().min(1)
})