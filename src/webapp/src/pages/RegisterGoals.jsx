import { useContext, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import goalsApi from "../api/goalsApi"
import { ContextCompany } from "../context/ContextCompany"

const RegisterGoals = () => {
    const { payload } = useContext(ContextCompany)
    const [searchParams, setSearchParams] = useSearchParams()
    const [goal, setGoal] = useState({ name: "", descriptions: "" })
    const navigate = useNavigate()
    const { idCompany, idFutureVision } = useParams()
    const [message, setMessage] = useState("")

    const path = `/company/${idCompany}/formfuturevisionchildren/${idFutureVision}`

    const modelChangeGoal = ({ target }) => {
        setGoal((state) => {
            return { ...state, [target.name]: target.value }
        })
    }

    const registerGoals = (event) => {
        event.preventDefault()
        searchParams.delete('update')
        setSearchParams(searchParams)

        if (goal.name === "" || goal.descriptions === "")
            setMessage("Os campos precisam ser preeenchidos")

        else {
            goalsApi.create(idCompany, { ...goal, author: payload.id, idFutureVision: parseInt(idFutureVision) })
                .then(() => {
                    setMessage({ name: "", descriptions: "" })
                    setMessage("Cadastro realizado com sucesso")
                    navigate({
                        pathname: `${path}`,
                        search: `?update=${true}`
                    })
                })
                .catch((error) => {
                    console.error(error)
                    setMessage("Algo deu errado!")
                })
        }
    }

    return (
        <div className="w-full flex flex-col items-center">
            <div>
                <span className='text-center text-bee-blue-clean font-bold text-3xl hover:cursor-default'>
                    Cadastrar Objetivo
                </span>
            </div>

            <div className='flex flex-col w-full min-h-[300px] justify-center items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
                <form onSubmit={registerGoals} className='w-full flex flex-col items-center p-4 gap-4'>
                    <div className='w-[70%] flex flex-col items-center justify-center gap-4'>
                        <input type="text" value={goal.name} required className="input-style text-center" placeholder='Título' name="name" onChange={modelChangeGoal} />

                        <textarea className="p-2 input-style min-h-[50px] text-center" value={goal.descriptions} placeholder='Descrição' name="descriptions" onChange={modelChangeGoal} cols="50" rows="3"></textarea>
                    </div>

                    <button className='submit-button mt-4' type="submit">Cadastrar</button>
                </form>
                <span className={`text-center`}> {message} </span>
            </div>
        </div>
    )
}

export default RegisterGoals