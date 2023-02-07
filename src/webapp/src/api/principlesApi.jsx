import axios from "axios"

const host = process.env.REACT_APP_HOSTLOCAL

const getAll = (idCompany) => axios.get(`${host}/principles/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/principles/c/${idCompany}`,data)

const principlesApi = {
    getAll,
    create
}

export default principlesApi