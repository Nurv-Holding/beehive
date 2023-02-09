const crudControllerFactory = require("../common/crudControllerFactory");
const formatDate = require("../common/formateDate");
const { prismaClient } = require("../database/prismaClient");

const crudFunctions = crudControllerFactory(prismaClient.user)

const createEmployee = async (req, res) => {
    let newData;
    const idCompany = parseInt(req?.params?.idCompany)
    const admissionDate = formatDate(req?.body?.admissionDate) 

    if(idCompany)
        newData = {...req.body, idCompany, admissionDate}
    else
        newData = req.body

    const profiles = await prismaClient.profile.findMany({ where: {name: "userCorporate"} })

    const users = await prismaClient.user.findUnique({ where: {email: req.body.email} })

    if(!profiles || profiles.length === 0){
        throw Error("There is not profiles created")

    }else if(users && Object.keys(users).length !== 0){
        throw Error("Email already exists")

    }else{
        const data = await prismaClient.user.create({data:{...newData, idProfile:profiles[0]?.id}})

        return res.status(200).send(data)
    }


}

const userController = {
    ...crudFunctions,
    createEmployee
}

module.exports = userController