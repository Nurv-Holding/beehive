import axios from "axios"
import { host } from "../utils/utilis"

// const options = {
//     method: 'post',
//     url: `${host}`,
//     withCredentials: false,
//     'Content-Type': 'text/plain'
//     // params: {
//     //   access_token: SECRET_TOKEN,
//     // },
//   }

const getAllByCompany = (idCompany) => axios.get(`${host}/users/c/${idCompany}`)
const getAll = () => axios.get(`${host}/users`)
const create = (idCompany,data) => axios.post(`${host}/users/c/${idCompany}`,data)
const update = (idUser,data) => axios.put(`${host}/users/${idUser}`,data)
const authenticate = (data) => axios.post(`${host}/login`, data)
    .then(x => localStorage.setItem("token", x.data))

//employeers
const createEmployee = (idCompany,data) => axios.post(`${host}/employees/c/${idCompany}`,data)
const getById = (idUser, idCompany) => axios.get(`${host}/users/${idUser}/c/${idCompany}`)

const usersApi = {
    getAllByCompany,
    create,
    createEmployee,
    authenticate,
    getAll,
    getById,
    update
}

export default usersApi