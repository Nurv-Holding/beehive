import axios from "axios"

const host = process.env.HOST

const getAll = (idCompany=1) => axios.get(`${host}/goalsKrs/c/${idCompany}`)
const create = (idCompany=1,data) => axios.get(`${host}/goalsTeam/${idCompany}`,data)

export default {
    getAll,
    create
}