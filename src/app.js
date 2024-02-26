import express from "express"
import "express-async-errors" //prevê erros assíncronos
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/index.routes.js"
import errorHandler from "./middlewares/errorHandler.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))