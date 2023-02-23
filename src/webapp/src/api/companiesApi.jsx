import axios from "axios"
import { host } from "../utils/utilis"

const getAll = () => axios.get(`${host}/companies`)
const getByCnpj = (cnpj) => axios.get(`${host}/companies/by/cnpj/${cnpj}`)
const create = (data) => axios.post(`${host}/companies`,data)
const getCompanyAndGoals = (idCompany) => axios.get(`${host}/companies/c/${idCompany}/goals`)
const getById = (idCompany) => axios.get(`${host}/companies/${idCompany}`)

const companiesApi = {
    getAll,
    getByCnpj,
    create,
    getCompanyAndGoals,
    getById
}

export default companiesApi