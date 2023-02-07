import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import teamsUsersApi from "../api/teamsUsersApi"
import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const AddMembers = ({ isOpen, closeModal, usersAndTeams, users, idTeam, idCompany, update, idLeader }) => {
    const [idUser, setIdUser] = useState(null)
    const [message, setMessage] = useState("")
    const [newUsers, setNewUsers] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        const handleNewUsers = async () => {
            const { data } = await teamsUsersApi.getAllTeamsAndUsers(idCompany)
            setNewUsers(() => {
                return users?.filter((item) => {
                    const verifyItem = data.find(f => f.idUser === item.id && f.idTeam === idTeam)
    
                    return item.id !== verifyItem?.idUser && item.id !== idLeader
                })
            })
        }

        handleNewUsers()
        setIdUser(null)

    }, [idTeam, update, idLeader, users, idCompany])

    const addMember = (event) => {
        event.preventDefault()
        searchParams.delete('update')
        setSearchParams(searchParams)

        if (!idUser) {
            setMessage('Primeiro deve selecionar um usuário')
        } else {
            teamsUsersApi.create(idCompany, { idUser: parseInt(idUser), idTeam })
                .then(() => {
                    setMessage("Usuário adicionado com sucesso!")
                    navigate({
                        pathname: `/company/${idCompany}/teamlist`,
                        search: `?update=${true}`
                    })

                    setMessage("")
                })
                .catch((error) => {
                    console.error(error)
                    setMessage("Algo deu errado!")
                })
        }
    }

    return (
        <>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div className='flex flex-row justify-between'>
                    <div className='w-2/4'>
                        <h4 className='text-gray-500'>Lider: {(users || []).filter(a => a?.id === idLeader)[0]?.name}</h4>
                        <span className='text-gray-500'>Lista de Integrantes</span>
                        <div className='w-[80%] flex flex-col bg-gray-300 p-1 rounded-md'>
                            {(usersAndTeams || []).filter(a => a.idTeam === idTeam).map((user) => {
                                return (
                                    <>
                                        <span className='my-0.5 overflow-hidden'>
                                            {user.nameUser}
                                        </span>
                                    </>
                                )
                            })}
                        </div>
                    </div>

                    <form onSubmit={addMember} className='w-2/4 flex flex-col'>
                        <span className='text-gray-500'>Adicionar Integrante</span>
                        <div className='input-and-label-container'>
                            <select onChange={({ target }) => { setIdUser(target.value) }} name="user" id="users" className="input-style">
                                <option disabled selected>Selecionar Integrante</option>
                                {(newUsers || []).map((user) => {
                                    return (
                                        <>
                                            <option value={user.id} className='my-0.5 overflow-hidden'>
                                                {user.name}
                                            </option>
                                        </>
                                    )
                                })}
                            </select>
                        </div>

                        <button className='submit-button mt-3' type="submit">Adicionar</button>
                        
                        <span className={`text-center text-black`}> {message} </span>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default AddMembers