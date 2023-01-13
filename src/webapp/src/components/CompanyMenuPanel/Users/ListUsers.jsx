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

            <div className='flex flex-row w-full justify-center items-center mt-6'>
                <button onClick={routerBack} className="px-2 rounded-lg bg-white hover:bg-bee-blue-clean hover:text-white hover:cursor-pointer absolute m-2 left-2">voltar</button>
            </div>

            <main className='flex flex-col items-center'>
                <span className='font-bold text-2xl text-black uppercase mt-2'> Lista de Usuários </span>

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