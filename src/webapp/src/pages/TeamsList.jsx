
import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import teamsApi from '../api/teamsApi'
import usersApi from '../api/usersApi'
import teamsUsersApi from '../api/teamsUsersApi'
import { useEffect } from 'react';
import AddMembers from '../components/addMembers';


const TeamList = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [teams, setTeams] = useState([])
    const [users, setUsers] = useState([])
    const [usersAndTeams, setUsersAndTeams] = useState([])
    const [idTeam, setIdTeam] = useState(null)
    const [idLeader, setIdLeader] = useState(null)
    const { idCompany } = useParams()
    const [searchParams] = useSearchParams()
    const update = searchParams.get('update')

    useEffect(() => {
        handleTeams()
        handleUsers()
        handleUsersAndTeams()

    }, [idCompany, update])

    const handleTeams = async () => {
        const { data } = await teamsApi.getAll(idCompany)
        setTeams(data)
    }

    const handleUsersAndTeams = async () => {
        const { data } = await teamsUsersApi.getAllTeamsAndUsers(idCompany)
        setUsersAndTeams(data)
    }

    const handleUsers = async () => {
        const { data } = await usersApi.getAllByCompany(idCompany)

        setUsers(data)
    }

    const routerBack = () => {
        navigate(`/company/${idCompany}`)
    }

    function openModal(id, idLeader) {
        setIsOpen(true)
        setIdTeam(id)
        setIdLeader(idLeader)
    }

    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <Header />

            <div className='flex flex-row w-full justify-center items-center mt-6'>
                <button onClick={routerBack} className="px-2 rounded-lg bg-white hover:bg-bee-blue-clean hover:text-white hover:cursor-pointer absolute m-2 left-2">voltar</button>
            </div>

            <main className='flex flex-col items-center'>
                <span className='font-bold text-2xl text-black uppercase mt-2'> Lista de Integrantes </span>
                
                <div className='w-11/12'>
                    <div className='container-empresas'>
                        <div className='flex flex-col items-center'>
                            <div className='container-table-grid-team px-4'>
                                <table className="table-fixed w-full">
                                    <thead>
                                        <tr>
                                            <th className='container-title-grid'>Time</th>
                                            <th className='container-title-grid'>Líder</th>
                                        </tr>
                                    </thead>

                                    <tbody className='text-center'>
                                        {(teams || []).map((team) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td onClick={()=>openModal(team?.id, team?.leader)} className="cursor-pointer">{team?.name}</td>
                                                        <td>{(users || []).filter(a => a?.id === team?.leader)[0]?.name}</td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <AddMembers 
                                isOpen={isOpen} 
                                closeModal={closeModal} 
                                usersAndTeams={usersAndTeams} 
                                users={users} 
                                idTeam={idTeam} 
                                idCompany={idCompany}
                                update={update}
                                idLeader={idLeader}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default TeamList;