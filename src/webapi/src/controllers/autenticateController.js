const { prismaClient } = require("../database/prismaClient");
const jwt = require("jsonwebtoken"); 
const handlerBuilder = require("../common/handlerBuilder");
const BusinessError = require("../common/erros/BusineErros");

const authenticateController = handlerBuilder(async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const secretKey = process.env.SECRET_KEY

    const user = await prismaClient.user.findUnique({ where: { email } })

    const profile = await prismaClient.profile.findUnique({ where: {id: user.idProfile} })

    if(!user || Object.keys(user).length === 0 || user.password !== password){
        throw new BusinessError('Invalid username or passwords')

    }else{
        let payload = {}

        if(profile.name === 'adminMaster')
            payload = {
                id: user.id,
                name: user.name,
                occupation: user.occupation,
                photo: user.photo,
                idProfile: user.idProfile,
                nameProfile: profile.name,
                email: user.email,
                idCompany: null,
            }

        else
            payload = {
                id: user.id,
                name: user.name,
                occupation: user.occupation,
                photo: user.photo,
                idProfile: user.idProfile,
                nameProfile: profile.name,
                idCompany: user.idCompany,
                email: user.email,
                admissionDate: user.admissionDate,
                status: user.status
            }

        console.log("payload", payload)

        const token = jwt.sign(payload, secretKey)

        res.status(200).send(token)
    }
})

module.exports = authenticateController