import axios from "axios"

const host = "https://beehive-teste-app.onrender.com"

const getAll = (idCompany=1) => axios.get(`${host}/goalsKrs/c/${idCompany}`)
const create = (idCompany=1,data) => axios.get(`${host}/goalsTeam/${idCompany}`,data)

const subtasksApi = {
    getAll,
    create
}

export default subtasksApi