import axios from "axios"

const host = 'http://localhost:3002'

const getAll = () => axios.get(`${host}/profiles`)
const create = (data) => axios.post(`${host}/profiles`,data)
const getById = (idProfile) => axios.get(`${host}/profiles/${idProfile}`)


export default {
    getAll,
    create,
    getById
}