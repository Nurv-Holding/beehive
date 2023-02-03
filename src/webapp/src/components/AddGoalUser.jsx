import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import goalUserApi from "../api/goalUserApi"
import NewModal from "./CompanyMenuPanel/Goals/components/NewModal"

function AddGoalUser({ idRef, idGoal, idUser, idCompany, path, payload }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const objectItem = {
        name:"",
        descriptions:"",
        idGoal:null,
        idUser:null
    }
    const [item, setItem] = useState(objectItem)

    const changeModel = ({target}) => {
        setItem((state) => {
            return {...state,[target.name]: target.value}
        })
    }

    const addGoalUser = async (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        const data = {
            ...item,
            idGoal: parseInt(idGoal),
            idUser: parseInt(idUser)
        }

        goalUserApi.create(idCompany,data)
        .then(() => {
            
            navigate({
              pathname: `${path}`,
              search: `?update=${true}`
            })

            setMessage("Objetivo criado com sucesso!!!")

          })
          .catch((error) => {
            console.error(error)
          })
    }

    return (
        <>
            <NewModal idRef={idRef}>
                <div className="p-8 flex flex-col justify-center items-center gap-4">
                    {JSON.stringify(item)}
                    <h1 className="text-center uppercase text-bee-strong-1 font-bold text-3xl"> {payload?.name} </h1>
                    <span className="text-bee-blue-clean text-lg font-bold">Adicionar Objetivo</span>

                    <form onSubmit={addGoalUser} className="mt-2 flex flex-col w-full">

                        <label for="tarefa">Objetivo:</label>
                        <input onChange={changeModel} name='name' type='text' className='input-style w-full' placeholder="Digite o nome do objetivo" />

                        <label for="tarefa">Descrição:</label>
                        <input onChange={changeModel} name='descriptions' type='text' className='input-style' placeholder="Digite a descrição do objetivo" />

                        <div className="mt-4">
                            <button className='submit-button' type="submit" >
                                Adicionar
                            </button>
                        </div>
                        {message}
                    </form>
                </div>
            </NewModal>
        </>
    )
}

export default AddGoalUser