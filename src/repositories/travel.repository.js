import { db } from "../database/db.connection.js"

async function findByName(cityName) {

}

async function findById(id) {

}

async function create(passengerId, flightId) {
    await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`, [passengerId, flightId])

}


export const travelsRepository = { findByName, findById, create}