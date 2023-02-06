import { json, Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import FormGoal from '../components/CompanyMenuPanel/Goals/FormGoal'
import { useContext } from 'react'
import { ContextCompany } from '../context/ContextCompany'
import { useState } from 'react'
import goalsApi from '../api/goalsApi'
import jwtDecode from "jwt-decode"
import GoalsList from '../components/CompanyMenuPanel/Goals/GoalsList'
import goalKrsApi from '../api/goalKrsApi'

function Goals() {
    const { companyGoals, idCompany, goalAndTeams, krs, goalKrs, item } = useContext(ContextCompany)
    const [message, setMessage] = useState("Aqui vai uma mensagem")
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const token = localStorage.getItem("token")
    const payload = token ? jwtDecode(token) : null

    const handleSubmit = (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        if (Object.values(item).length === 0 || item.name === "" || item.descriptions === "")
            setMessage("Os campos precisam ser preenchidos")
        else {

            goalsApi.create(idCompany, { ...item, author: payload?.id })
                .then(() => {
                    setMessage("Cadastro realizado")
                    navigate({
                        pathname: `/company/${idCompany}`,
                        search: `?update=${true}`
                    })

                    searchParams.delete("update")

                })
                .catch((error) => {
                    console.error(error)
                    setMessage(error)
                })
        }


    }

    return (
        <div className='w-full h-full flex flex-col items-center mt-8'>
            <GoalsList
                companyGoals={companyGoals}
                goalKrs={goalKrs}
                goalAndTeams={goalAndTeams}
                krs={krs}
                idCompany={idCompany}
            />
        </div>
    )
}

export default Goals