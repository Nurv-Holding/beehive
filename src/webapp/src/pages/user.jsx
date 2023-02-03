import Header from '../components/Header';
import Profile from '../components/profile';
import { ContextCompany } from '../context/ContextCompany';
import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';


function User() {
    const {
        company,
        idCompany,
        idGoal,
        payload,
        newGoalUsersKrs,
        taskUsers
    } = useContext(ContextCompany)
    const navigate = useNavigate()

    const returnTotalTasks = () => {}

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

                        <div className=''>
                            <h1 className='container-title'>OKRs Individuais</h1>
                            <div className='mx-auto grid grid-cols-2 items-center justify-center gap-4 mb-2'>
                                {(newGoalUsersKrs || []).map((item) => {
                                    return(
                                        <div className='bg-white w-[300px] h-[300px] overflow-y-scroll rounded-3xl shadow-lg py-3 px-3 flex flex-col items-center cursor-pointer'>
                                            <span onClick={() => redirectRouter(`goal/${item.idGoal}`)} className="text-bee-strong-1 text-xl font-bold text-center uppercase"> {item.nameGoal} </span>
                                            {(newGoalUsersKrs || []).filter(f => f.idGoal === item.idGoal).map((goalUser) => {
                                                return(
                                                    <Disclosure>
                                                        <Disclosure.Button className="w-full bg-white w-full p-4 rounded-xl shadow-lg cursor-default my-1">
                                                        <h1 className='text-black uppercase text-center font-bold text-[12px]'> {goalUser.nameGoalUser} </h1>
                                                        </Disclosure.Button>
                                                        <>
                                                        {(goalUser.krs.map((kr) => {
                                                            return(
                                                                <Disclosure.Panel className='bg-bee-blue-clean p-2 my-1 uppercase text-[10px] rounded-xl text-white shadow-lg font-bold cursor-default'>
                                                                    <span> {kr.nameKr} </span>
                                                                </Disclosure.Panel>
                                                            )
                                                        }))}
                                                        </>

                                                    </Disclosure>
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