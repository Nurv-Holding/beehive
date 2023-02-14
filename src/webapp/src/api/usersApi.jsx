import axios from "axios"
import { host } from "../utils/utilis"

const options = {
    source: '/:path*',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
    },
    // withCredentials: true,
    // credentials: 'same-origin',
  }

const getAllByCompany = (idCompany) => axios.get(`${host}/users/c/${idCompany}`)
const getAll = () => axios.get(`${host}/users`)
const create = (idCompany,data) => axios.post(`${host}/users/c/${idCompany}`,data)
const update = (idUser,data) => axios.put(`${host}/users/${idUser}`,data)
const authenticate = (data) => axios.post(`${host}/login`,{...options, body:data})
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