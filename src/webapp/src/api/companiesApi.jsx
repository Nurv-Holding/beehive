import axios from "axios"

const host = 'http://localhost:3002'

const getAll = () => axios.get(`${host}/companies`)


export default {
    getAll,
}