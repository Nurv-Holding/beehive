const crudControllerFactory = require("../common/crudControllerFactory");
const { prismaClient } = require("../database/prismaClient");

const crudFunction = crudControllerFactory(prismaClient.historyGoalKr)

const progectionHistoryGoalKrByKr = (req, res) => {}

const historyGoalsKrsController = {
    ...crudFunction,
    progectionHistoryGoalKrByKr
}

module.exports = historyGoalsKrsController