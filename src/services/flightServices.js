import dayjs from "dayjs"
import { errors } from "../errors/errors.js"
import { cityRepository } from "../repositories/city.repository.js"
import { flightRepository } from "../repositories/flight.repository.js"

async function create (origin, destination, date){
const today = dayjs()
const flightDate = dayjs(day, "DD-MM-YYYY")
    if(flightDate < today) throw errors.invalidFlightDate()

    if(origin === destination) throw errors.equalCities()

             const city1 = await cityRepository.findById(origin)
             const city2 = await cityRepository.findById(destination)

    if(!city1 || !city2) throw errors.notFound("city")
    
    await flightRepository.create(origin, destination, date)
}

export const flightServices = {create}