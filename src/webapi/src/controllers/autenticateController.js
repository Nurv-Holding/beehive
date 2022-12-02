const { prismaClient } = require("../database/prismaClient");
const jwt = require("jsonwebtoken") 

const authenticateController = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const secretKey = process.env.SECRET_KEY

    const user = await prismaClient.user.findUnique({ where: { email } })

    if(!user || Object.keys(user).length === 0 || user.password !== password){
        res.status(500).send("Invalid username or passwords")

    }else{
        const payload = {
            id: user.id,
            name: user.name,
            occupation: user.occupation,
            photo: user.photo,
            profile: user.idProfile
        }

        console.log("payload", payload)

        const token = jwt.sign(payload, secretKey)

        res.status(200).send(token)
    }
}

module.exports = authenticateController