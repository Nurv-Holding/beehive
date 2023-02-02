import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import TitleCompany from '../components/TitleCompany';
import UserAddKr from '../components/UserAddKr';
import UserCloseGoal from '../components/UserCloseGoal';
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
        teamsAndUsersByGoal
    } = useContext(ContextCompany)

    let [isOpenAddKr, setIsOpenAddKr] = useState(false)
    let [isOpenCloseGoal, setIsOpenCloseGoal] = useState(false)

    // const [screen, setScreen] = useState(getScreen())

    // useEffect(() => {
    //     handleScreen()

    //     window.addEventListener('resize', handleScreen);

    //     return () => {
    //       window.removeEventListener('resize', handleScreen);
    //     };

    // }, [])

    // function getScreen() {
    //     return window.innerWidth
    // }

    // const handleScreen = () => {
    //     setScreen(getScreen())
    // }

    function openModalAddKr() {
        setIsOpenAddKr(true)
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
                                    {(goalAndTeams || []).filter(e => e.idGoal == idGoal).map((team) => {
                                        return(
                                            <span className='font-bold text-lg mt-2 text-bee-blue-clean bg-white p-2 rounded-md shadow-md'> {team.nameTeam} </span>
                                        )
                                    })}
                                    
                                </div>
                            </div>
                        </div>

                        <div className='container-percentage-okr flex flex-row justify-end gap-4'>
                            <UserAddKr
                                isOpen={isOpenAddKr}
                                openModal={openModalAddKr}
                                closeModal={closeModal}
                            />

                            <UserCloseGoal
                                isOpen={isOpenCloseGoal}
                                openModal={openModalCloseGoal}
                                closeModal={closeModal}
                            />
                        </div>
                        
                    </div>
                    {(newGoalUsersKrs || []).filter(e => e.idGoal == idGoal && e.idUser === payload?.id).map((goalUser) => {
                        return(
                            <div className='mt-4'>
                                <span className='font-bold text-lg text-bee-blue-clean'> Objetivo pessoal: {goalUser.nameGoalUser} </span>

                                {goalUser.krs.map((kr) => {
                                    return(
                                        <div className='mt-4'>
                                            <UserGoalKrs kr={kr} />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}

                </div>
            </main>
        </>
    );
}

export default GoalUser;