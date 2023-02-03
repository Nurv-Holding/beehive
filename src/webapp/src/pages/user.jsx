import Header from '../components/Header';
import jwtDecode from 'jwt-decode';
import Profile from '../components/profile';
import { ContextCompany } from '../context/ContextCompany';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';


function User() {
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
        historyGoalUsersKrs,
        goalUsers,
        goal,
        taskUsers
    } = useContext(ContextCompany)
    const navigate = useNavigate()

    const redirectRouter = (route) => {
        navigate(route)
    }

    return (
        <>
            <Header />

            <main>

                <div className='grid-container'>
                    <div className='grid-col'>
                        <Profile payload={payload} />

                        <div className='grid-row w-full bg-white p-4 flex flex-col'>
                            <h1 className='container-title'>Entregas</h1>
                            <div className='flex flex-col gap-1'>
                                <div className='w-full rounded-md p-1 text-white bg-green-500'>
                                    <span>
                                        Em dia:
                                        <span className='text-xl font-bold'> 12</span>
                                    </span>
                                </div>
                                <div className='w-full rounded-md p-1 text-white bg-yellow-500'>
                                    <span>
                                        Para hoje:
                                        <span className='text-xl font-bold'> 1</span>
                                    </span>
                                </div>
                                <div className='w-full rounded-md p-1 text-white bg-red-500'>
                                    <span>
                                        Atrasadas:
                                        <span className='text-xl font-bold'> 3</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid-col'>
                        <div className='grid-row w-full bg-white p-4'>
                            <h1 className='container-title'>OKRs Corporativos</h1>

                            <div>
                                <ul className='flex flex-row gap-2 w-full flex-wrap justify-center items-center'>
                                    <a href='1/goal/1' className='text-center cursor-pointer w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a href='1/goal/1' className='text-center cursor-pointer w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a href='1/goal/1' className='text-center cursor-pointer w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a href='1/goal/1' className='text-center cursor-pointer w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a href='1/goal/1' className='text-center cursor-pointer w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a href='1/goal/1' className='text-center cursor-pointer w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>
                                </ul>
                            </div>
                        </div>

                        <div className='grid-row w-full bg-white p-4'>
                            <h1 className='container-title'>OKRs Individuais</h1>
                            <div>
                                {(newGoalUsersKrs || []).map((item) => {
                                    return(
                                        <div onClick={() => redirectRouter(`goal/${item.idGoal}`)} className='p-4 cursor-pointer'>
                                            <span> {item.nameGoal} </span>
                                            {(newGoalUsersKrs || []).filter(f => f.idGoal === item.idGoal).map((goalUser) => {
                                                return(
                                                    <div>
                                                        <span className='text-green-500'> {goalUser.nameGoalUser} </span>
                                                        <div>
                                                            {(goalUser.krs.map((kr) => {
                                                                return(
                                                                    <div className='text-bee-blue-clean'>
                                                                        <span> {kr.nameKr} </span>
                                                                    </div>
                                                                )
                                                            }))}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
  
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
}

export default User;