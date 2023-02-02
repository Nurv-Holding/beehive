import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import goalUserApi from "../api/goalUserApi"
import historyGoalsUserKrsApi from "../api/historyGoalsUserKrsApi"
import { calcPercentage } from "../utils/utilis"
import Modal from "./CompanyMenuPanel/Goals/components/Modal"

function AddUserKr({ 
    isOpen, 
    closeModal,
    nameGoalUser,
    idUser,
    idCompany,
    idGoalsUser,
    idGoal,
}) {
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const objectItem = {
        name:"",
        descriptions: "",
        toQuarterly:null,
        fromQuarterly: null,
        toYearly: null,
        fromYearly: null
    }
    const [item, setItem] = useState(objectItem)

    const changeModel = ({target}) => {
        setItem((state) => {
            return {...state,[target.name]: target.value}
        })
    }

    const createKr = async (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        const data = {
            ...item,
            idGoalsUser: parseInt(idGoalsUser),
            toQuarterly: parseInt(item.toQuarterly),
            toYearly: parseInt(item.toQuarterly),
            fromQuarterly: parseInt(item.fromQuarterly),
            fromYearly: parseInt(item.fromYearly),
            done: parseInt(item.toQuarterly),
            idUser
        }

        const result = await goalUserApi.createKr(idCompany, data)
        const goalKr = result.data

        const newData = {
            idGoalsUserKr: parseInt(goalKr.id),
            quaPercentage: calcPercentage((goalKr?.done), goalKr?.fromQuarterly),
            yeaPercentage: calcPercentage((goalKr?.done), goalKr?.fromYearly),
            to: goalKr?.done,
            from: data.done,
            status: !!goalKr?.status,
            note: "Iniciando Kr"
        }

        historyGoalsUserKrsApi.create(idCompany, newData)
            .then(() => {
            setMessage("KR criado com sucesso")
            navigate({
                pathname: `/company/${idCompany}/user/${idUser}/goal/${idGoal}`,
                search: `?update=${true}`
            })

            setItem(objectItem)

            closeModal()
            })
            .catch((error) => {
            console.error(error)
            setMessage("Algo deu errado!")
            })
    }

    return (
        <div>
            <Modal isOpen={isOpen} closeModal={closeModal} title={"Adicionar KR"}>
                <h5> {nameGoalUser} </h5>
                <form onSubmit={createKr} className="mt-2 flex flex-col">
                    <label for="tarefa">KR:</label>
                    <input onChange={changeModel} name='name' type='text' className='input-style' placeholder="Digite o nome do KR"/>

                    <label for="tarefa">Descrição:</label>
                    <input onChange={changeModel} name='descriptions' type='text' className='input-style' placeholder="Digite a descrição do KR"/>

                    <div className="flex flex-col justify-between">

                        <div className="flex flex-col w-[48%]">
                            <label for="tarefa">Meta Trimestral:</label>
                            <div className="flex flex-row">
                                <div>
                                    <label >De:</label>
                                    <input onChange={changeModel} name='toQuarterly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                                <div className="mx-4">
                                    <label >Para:</label>
                                    <input onChange={changeModel} name='fromQuarterly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                            </div>
     
                        </div>

                        <div className="flex flex-col w-[48%]">
                            <label for="tarefa">Meta Anual:</label>
                            <div className="flex flex-row">
                                <div>
                                    <label >De:</label>
                                    <input onChange={changeModel} name='toYearly' value={item?.toQuarterly} type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                                <div className="mx-4">
                                    <label >Para:</label>
                                    <input onChange={changeModel} name='fromYearly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <button className='submit-button' type="submit" >
                            Adicionar
                        </button>
                    </div>
                    {message}
                </form>
            </Modal>
        </div>
    )
}

export default AddUserKr
