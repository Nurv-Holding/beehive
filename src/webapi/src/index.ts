import * as express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extends:false}))

export default app