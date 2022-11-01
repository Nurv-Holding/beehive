import axios from "axios"

const host = 'http://localhost:3002'

const getAll = (idCompany=1) => axios.get(`${host}/teams/c/${idCompany}`)

export default {
    getAll
}