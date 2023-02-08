import moment from "moment";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextCompany } from "../../../context/ContextCompany";

const ListUsers = () => {
    const {users} = useContext(ContextCompany)

    const navigate = useNavigate()

    const routerBack = () => {
        navigate(-1)
    }

    return (
        <>
            <main className='flex flex-col items-center gap-8 relative'>
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
                                            <th className='container-title-grid'>Data de admissão</th>
                                            <th className='container-title-grid'>Status</th>
                                        </tr>
                                    </thead>

                                    <tbody className='text-center'>
                                        {(users || []).map((user) => {
                                            return (
                                                <tr>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.occupation}</td>
                                                    <td>{moment(user?.admissionDate).format('DD/MM/YY')}</td>
                                                    <td>{`${user.status? "Ativo": "Inativo"}`}</td>
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