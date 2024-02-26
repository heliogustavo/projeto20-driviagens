import { passengerRepository } from "../repositories/passengerRepository.js"


async function create (firstName, lastName){

    await passengerRepository.create(firstName, lastName)
}

export const passengerService = {create}