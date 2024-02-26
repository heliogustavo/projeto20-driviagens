import { cityService } from "../services/cityService"
async function create(req, res) {

    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export const cityController = { create }
