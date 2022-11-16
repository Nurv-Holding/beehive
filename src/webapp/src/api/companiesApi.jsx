import axios from "axios"

const host = 'http://localhost:3002'

const getAll = () => axios.get(`${host}/companies`)
const create = (data) => axios.post(`${host}/companies`,data)


export default {
    getAll,
    create
}