import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usersApi from '../../../api/usersApi'
import Header from "../../Header";

const ListUsers = () => {
    const { idCompany } = useParams()
    const [users, setUsers] = useState([])


    const navigate = useNavigate()

    const routerBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        handlerUsers()

    }, [idCompany])

    const handlerUsers = async () => {
        const { data } = await usersApi.getAllByCompany(idCompany)
        setUsers(data)
    }

    return (
        <>
            <Header />

            <main className='flex flex-col items-center gap-8'>
            <div className='flex items-center mt-8'>
                    <button onClick={routerBack} className="p-3 text-xl rounded-full flex justify-center items-center bg-white hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-2">
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
                                        </tr>
                                    </thead>




                                    <tbody className='text-center'>
                                        {(users || []).map((user) => {
                                            return (
                                                <tr>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.occupation}</td>
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