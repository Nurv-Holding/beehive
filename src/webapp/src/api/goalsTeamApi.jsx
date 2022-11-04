import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany=1) => axios.get(`${host}/goalsTeam/c/${idCompany}`)
const create = (idCompany=1,data) => axios.get(`${host}/goalsTeam/c/${idCompany}`,data)

export default {
    getAll,
    create
}