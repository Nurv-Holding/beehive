import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import TitleCompany from '../components/TitleCompany';
import AddUserKr from '../components/AddUserKr';
import FinishingUserGoal from '../components/FinishingUserGoal';
import UserGoalKrs from '../components/userGoalKrs';
import { ContextCompany } from '../context/ContextCompany';

function GoalUser() {
    const {
        company,
        idCompany,
        idGoal,
        payload,
        goalUserKrs,
        newGoalUsersKrs,
        goalAndTeams,
        teamsAndUsersByGoal,
        idUser,
        historyGoalUsersKrs
    } = useContext(ContextCompany)

    const [isOpenAddKr, setIsOpenAddKr] = useState(false)
    const [isOpenCloseGoal, setIsOpenCloseGoal] = useState(false)
    const [item, setItem] = useState(null)

    function openModalAddKr(item) {
        setIsOpenAddKr(true)
        setItem(item)
    }

    function openModalCloseGoal() {
        setIsOpenCloseGoal(true)
    }

    function closeModal() {
        setIsOpenAddKr(false)
        setIsOpenCloseGoal(false)
    }

    const navigate = useNavigate()

    const routerBack = () => {
        navigate(-1)
    }


    return (
        <>
            <Header />

            <main className='flex flex-col items-center pt-8'>
                <div className='flex flex-row w-full justify-center items-center'>
                    <button onClick={routerBack} className="p-3 shadow-md text-xl rounded-full flex justify-center items-center bg-white hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </button>

                    <TitleCompany className='text-bee' name={company?.name} />
                </div>
                <div className='w-11/12 flex flex-col'>
                    <div className='container-two-percentage mb-4'>
                        <div className='container-percentage-okr flex flex-col'>
                            <span className='font-bold text-xl text-bee-strong-1 uppercase'> {newGoalUsersKrs.length !== 0 && newGoalUsersKrs[0].nameGoal} </span>
                            <div className='border-t pt-4 border-white'>
                                <span className='font-bold text-xl text-bee-strong-1'>Times: </span>
                                <div className='flex gap-2'>
                                    {(teamsAndUsersByGoal || []).filter(e => e.idGoal == idGoal).map((team) => {
                                        return(
                                            <span className='font-bold text-lg mt-2 text-bee-blue-clean bg-white p-2 rounded-md shadow-md'> {team.nameTeam} </span>
                                        )
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        {(newGoalUsersKrs || []).filter(e => e.idGoal == idGoal && e.idUser == idUser).map((goalUser) => {
                            return(
                                <div className='mt-4'>
                                    <div className='flex justify-between'>
                                        <span className='font-bold text-lg text-bee-blue-clean'> Objetivo pessoal: {goalUser.nameGoalUser} </span>
                                        <div className='container-percentage-okr flex flex-row justify-end gap-4'>
                                            <button className="modal-btn" onClick={() => openModalAddKr(goalUser)}>
                                                Adicionar KR
                                            </button>
                                            <AddUserKr
                                                isOpen={isOpenAddKr}
                                                closeModal={closeModal}
                                                idUser={parseInt(idUser)}
                                                idCompany={idCompany}
                                                idGoalsUser={item?.idGoalUser}
                                                nameGoalUser={item?.nameGoalUser}
                                                idGoal={idGoal}
                                            />

                                            <FinishingUserGoal
                                                isOpen={isOpenCloseGoal}
                                                openModal={openModalCloseGoal}
                                                closeModal={closeModal}
                                            />
                                        </div>
                                    </div>

                                    {goalUser.krs.map((kr) => {
                                        return(
                                            <div className='mt-4'>
                                                <UserGoalKrs 
                                                kr={kr} 
                                                historyGoalUsersKrs={historyGoalUsersKrs}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>


                </div>
            </main>
        </>
    );
}

export default GoalUser;