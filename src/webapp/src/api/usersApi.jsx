import axios from "axios"

const host = process.env.REACT_APP_HOSTLOCAL

const getAllByCompany = (idCompany) => axios.get(`${host}/users/c/${idCompany}`)
const getAll = () => axios.get(`${host}/users`)
const create = (idCompany,data) => axios.post(`${host}/users/c/${idCompany}`,data)
const authenticate = (data) => axios.post(`${host}/login`, data)
    .then(x => localStorage.setItem("token", x.data))

//employeers
const createEmployee = (idCompany,data) => axios.post(`${host}/employees/c/${idCompany}`,data)

const usersApi = {
    getAllByCompany,
    create,
    createEmployee,
    authenticate,
    getAll
}

export default usersApi