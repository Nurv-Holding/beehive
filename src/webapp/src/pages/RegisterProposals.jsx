import { useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import proposalsApi from "../api/proposalsApi"

const RegisterProposals = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [item, setItem] = useState({ title: "", description: "" })
    const navigate = useNavigate()
    const { idCompany, idFutureVision } = useParams()
    const [message, setMessage] = useState("")

    const path = `/company/${idCompany}/formfuturevisionchildren/${idFutureVision}/register/proposals`

    const modelChange = ({ target }) => {
        setItem((state) => {
            return { ...state, [target.name]: target.value }
        })
    }

    const registerProposals = (event) => {
        event.preventDefault()
        searchParams.delete('update')
        setSearchParams(searchParams)

        if (item.title === "" || item.description === "")
            setMessage("Os campos precisam ser preeenchidos")

        else {
            proposalsApi.create(idCompany, { ...item, idFutureVision: parseInt(idFutureVision) })
                .then(() => {
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
                <span className=' text-center text-bee-blue-clean font-bold text-3xl hover:cursor-default'>
                    Cadastrar Propósito
                </span>
            </div>

            <div className='flex flex-col w-full min-h-[300px] justify-center items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
                <form onSubmit={registerProposals} className='w-full flex flex-col items-center p-4 gap-4'>
                    <div className='w-[70%] flex flex-col items-center justify-center gap-4'>
                        <input type="text" required className="input-style text-center" placeholder='Título' name="title" onChange={modelChange} />

                        <textarea className="p-2 input-style min-h-[50px] text-center" placeholder='Descrição' name="description" onChange={modelChange} cols="50" rows="3"></textarea>
                    </div>

                    <button className='submit-button mt-4' type="submit">Cadastrar</button>
                </form>
                <span className={`text-center`}> {message} </span>
            </div>
        </div>
    )
}

export default RegisterProposals