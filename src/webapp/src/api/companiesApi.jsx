import axios from "axios"

const host = 'http://localhost:3002'

const getAll = () => axios.get(`${host}/companies`)
const create = (data) => axios.post(`${host}/companies`,data)
const getCompanyAndGoals = (idCompany) => axios.get(`${host}/companies/c/${idCompany}/goals`)
const getById = (idCompany) => axios.get(`${host}/companies/${idCompany}`)

const companiesApi = {
    getAll,
    create,
    getCompanyAndGoals,
    getById
}


export default companiesApi