import { errors } from "../errors/errors.js"
import { cityRepository } from "../repositories/city.repository.js"

async function create (cityname){
    const city = await cityRepository.findByName(cityname)

    if(city) throw errors.conflict("city")

    await cityRepository.create(cityname)
}

export const cityService = {create}