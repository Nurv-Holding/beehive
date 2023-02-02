import axios from "axios"

const host = "https://beehive-teste-app.onrender.com"

const getAll = () => axios.get(`${host}/companies`)
const create = (data) => axios.post(`${host}/companies`,data)
const getCompanyAndGoals = (idCompany) => axios.get(`${host}/companies/c/${idCompany}/goals`)
const getById = (idCompany) => axios.get(`${host}/companies/${idCompany}`)


export default {
    getAll,
    create,
    getCompanyAndGoals,
    getById
}