import axios from "axios"

const host = "https://beehive-teste-app.onrender.com"

const getAllByCompany = (idCompany) => axios.get(`${host}/users/c/${idCompany}`)
const getAll = () => axios.get(`${host}/users`)
const create = (idCompany,data) => axios.post(`${host}/users/c/${idCompany}`,data)
const createEmployee = (idCompany,data) => axios.post(`${host}/employees/c/${idCompany}`,data)
const authenticate = (data) => axios.post(`${host}/login`, data)
    .then(x => localStorage.setItem("token", x.data))

export {
    getAllByCompany,
    create,
    createEmployee,
    authenticate,
    getAll
}