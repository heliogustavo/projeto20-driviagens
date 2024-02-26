
async function create(req, res) {

    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}

async function findTravels(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export const passengerController = { create, findTravels }
