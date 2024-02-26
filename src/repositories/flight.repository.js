import { db } from "../database/db.connection.js"

async function findByName(cityName) {

}

async function findById(id) {
    const travels = await db.query(`SELECT * FROM travels WHERE id=$1;` [id])
    return travels.rows[0]
}

async function create(origin, destination, date) {
    await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2, $3);`, [origin, destination, date])

}


export const flightRepository = { findByName, findById, create}