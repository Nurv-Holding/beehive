const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const companiesController = crudControllerFactory(prismaClient.company)

module.exports = companiesController