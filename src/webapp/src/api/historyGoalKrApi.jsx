import axios from "axios"

const host = 'http://localhost:3002'

const create = (idCompany,data) => axios.post(`${host}/hGoalsKrs/history/${idCompany}`,data)

export default {
    create
}