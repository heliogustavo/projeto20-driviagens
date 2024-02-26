import { errors } from "../errors/errors.js"
import { flightRepository } from "../repositories/flight.repository.js"
import { passengerRepository } from "../repositories/passengerRepository.js"
import { travelsRepository } from "../repositories/travel.repository.js"


async function create (passengerId, flightId){
    const passenger = await passengerRepository.findById(passengerId)
        if(!passenger) throw errors.notFound("Passenger")

    const flight = await flightRepository.findById(passengerId)
        if(!flight) throw errors.notFound("flight")
        
    await travelsRepository.create(passengerId, flightId)
}

export const travelsService = {create}