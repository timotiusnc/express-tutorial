import * as express from "express"

import * as Controller from "./controllers"
import * as Repo from "./repository"

const app: express.Application = express()
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

app.use("/customers", Controller.Customer(new Repo.LocalCustomer()))
app.use("/files", Controller.File())

app.use(express.static("public/img"))

app.listen(port)
