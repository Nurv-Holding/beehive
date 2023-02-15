import moment from "moment";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextCompany } from "../../../context/ContextCompany";
import EditUser from "../../EditUser";

const ListUsers = () => {
    const {users, payload, idCompany, profiles } = useContext(ContextCompany)
    const [item, setItem] = useState(null)
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    const openModal = (item) => {
        setItem(item)
        setMessage("")
    }

    const routerBack = () => {
        navigate(`/company/${idCompany}/users`)
    }

    return (
        <>
            <main className='flex flex-col items-center gap-8 relative text-black'>
                <EditUser 
                    idRef={"editUser"} 
                    item={item} 
                    message={message} 
                    setMessage={setMessage} 
                />
                <div className='flex items-center mt-8'>
                    <button onClick={routerBack} className="p-3 text-xl shadow-md rounded-full flex justify-center items-center bg-bee-blue-clean hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </button>

                    <span className='font-bold text-2xl text-bee-blue-clean uppercase mt-2'>Lista de usuários</span>
                </div>

                <div className='w-11/12'>
                    <div className='container-empresas'>
                        <div className='flex flex-col items-center'>
                            <div className='container-table-grid-team px-4'>
                                <table className="table-fixed w-full">
                                    <thead>
                                        <tr>
                                            <th className='container-title-grid'>Nome</th>
                                            <th className='container-title-grid'>Email</th>
                                            <th className='container-title-grid'>Cargo</th>
                                            <th className='container-title-grid'>Perfil</th>
                                            <th className='container-title-grid'>Data de admissão</th>
                                            <th className='container-title-grid'>Data de saída</th>
                                            <th className='container-title-grid'>Ações</th>
                                        </tr>
                                    </thead>

                                    <tbody className='text-center'>
                                        {(users || []).map((user) => {
                                            return (
                                                <tr>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.occupation}</td>
                                                    <td>{`${(profiles || []).find(e => e.id === user.idProfile)?.name === "userCorporate"? "Usuário": "Administrador"}`}</td>
                                                    <td>{moment(user?.admissionDate).format('DD/MM/YY')}</td>
                                                    <td>{`${user.status? "Até o momento": moment(user?.updatedAt).format('DD/MM/YY')}`}</td>
                                                    <td>
                                                        {payload?.nameProfile !== "userCorporate"?
                                                        <button onClick={() => openModal(user)} type="button" className='bg-bee-blue-clean px-2 py-[3px] rounded-md text-white text-xs cursor-pointer hover:bg-sky-900' data-bs-toggle="modal" data-bs-target="#editUser"> 
                                                            Editar 
                                                        </button>:
                                                        "Nenhuma ação permitida"
                                                        }

                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ListUsers;