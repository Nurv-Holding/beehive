const express = require("express")

const app = express()

const port = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({extended:false}))

require('./routes')(app)

const server = app.listen(port,() => {
    console.log(`server is port http://localhost:${port}`)
})

process.on('SIGINT',() => {
    server.close()

    console.log('server finished')
})


