const { PrismaClient } = require("@prisma/client")

const prismaClient = new PrismaClient()

module.exports = {prismaClient}

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()