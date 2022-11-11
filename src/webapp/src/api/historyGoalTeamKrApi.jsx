import axios from "axios"

const host = 'http://localhost:3002'

const create = (idCompany,data) => axios.post(`${host}/hGoalsTeamKrs/history/${idCompany}`,data)
const getByKrs = () => axios.get(`${host}/hGoalsTeamKrs/p/history/krs`)

export default {
    create,
    getByKrs
}