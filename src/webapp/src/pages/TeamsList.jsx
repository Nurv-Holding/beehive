import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddMembers from '../components/addMembers';
import { ContextCompany } from '../context/ContextCompany';

const TeamList = () => {
    const {teams, teamUsers, usersByCompany} = useContext(ContextCompany)
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [idTeam, setIdTeam] = useState(null)
    const [idLeader, setIdLeader] = useState(null)
    const { idCompany } = useParams()
    
    const routerBack = () => {
        navigate(`/company/${idCompany}/teams`)
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
            <main className='flex flex-col items-center gap-8 relative'>
                <div className='flex items-center mt-8'>
                    <button onClick={routerBack} className="p-3 shadow-md text-xl rounded-full flex justify-center items-center bg-bee-blue-clean hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </button>

                    <span className='font-bold text-2xl text-bee-blue-clean uppercase mt-2'> Lista de Times </span>
                </div>

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
                                    {teams || usersByCompany?
                                    <tbody className='text-center'>
                                        {(teams || []).map((team) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td onClick={() => openModal(team?.id, team?.leader)} className="cursor-pointer">{team?.name}</td>
                                                        <td>{(usersByCompany || []).filter(a => a?.id === team?.leader)[0]?.name}</td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    </tbody>
                                    :
                                    <> Aguarde... </>
                                    }

                                </table>
                                <AddMembers
                                    isOpen={isOpen}
                                    closeModal={closeModal}
                                    usersAndTeams={teamUsers}
                                    users={usersByCompany}
                                    idTeam={idTeam}
                                    idCompany={idCompany}
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