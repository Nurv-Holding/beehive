import axios from "axios"

const host = 'http://localhost:3002'

const getByGoal = (idCompany,idGoal) => axios.get(`${host}/goalsTeam/${idGoal}/krs/c/${idCompany}`)

export default {
    getByGoal
    
}