import httpStatus from "http-status"
import { passengerService } from "../services/passengerService.js"

async function create(req, res) {
    const {firstName, lastName} = req.body
    await passengerService.create(firstName, lastName)
   res.sendStatus(httpStatus.CREATED)
}

async function findTravels(req, res) {

}

export const passengerController = { create, findTravels }
