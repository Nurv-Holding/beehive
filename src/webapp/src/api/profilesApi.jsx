import axios from "axios"

const host = process.env.REACT_APP_HOSTPROD

const getAll = () => axios.get(`${host}/profiles`)
const create = (data) => axios.post(`${host}/profiles`,data)
const getById = (idProfile) => axios.get(`${host}/profiles/${idProfile}`)

const principlesApi = {
    getAll,
    create,
    getById
}

export default principlesApi