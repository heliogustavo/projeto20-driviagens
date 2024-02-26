import httpStatus from "http-status"
import { flightServices } from "../services/flightServices.js"

async function findAll(req, res) {

}

async function create(req, res) {
    const { origin, destination, date } = req.body

    flightServices.create(origin, destination, date)
    res.sendStatus(httpStatus.CREATED)
}

export const flightController = { findAll, create }
