import axios from "axios"

const host = process.env.REACT_APP_HOSTLOCAL

const getAll = (idCompany) => axios.get(`${host}/proposals/c/${idCompany}`)
const create = (idCompany,data) => axios.post(`${host}/proposals/c/${idCompany}`,data)

const proposalsApi = {
    getAll,
    create
}

export default proposalsApi