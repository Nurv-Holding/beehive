const cors = require('cors')
const express = require('express')
const AuthorizationError = require('./common/erros/AuthorizeErros')
const BusinessError = require('./common/erros/BusineErros')

const app = express()

const port = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

require('./routes')(app)

app.use((err, req, res, next) => {
    console.log(err)
    if(err instanceof BusinessError)
        res.status(409).send(err.message)
    else if(err instanceof AuthorizationError)
        res.status(403).send(err.message)
    else if (err.errors)
        res.status(409).send(err.errors.map(x => x.message))
    else
        res.status(500).send('erro inesperado ocorreu :(')
})

const server = app.listen(port,() => {
    console.log(`server is port http://localhost:${port}`)
})

process.on('SIGINT',() => {
    server.close()

    console.log('server finished')
})

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/webapp/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/webapp/build/index.html'))
);
