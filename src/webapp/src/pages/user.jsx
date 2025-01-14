import Profile from '../components/profile';
import { ContextCompany } from '../context/ContextCompany';
import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';

function User() {
    const {
        idUser,
        payload,
        newGoalUsersKrs,
        taskUsers,
        goalUsers,
        teamsAndUsersByUser,
        futureVisions,
        prinples,
        proposals
    } = useContext(ContextCompany)

    const navigate = useNavigate()

    const returnNewTask = () => {
        let items = [];
        (taskUsers || []).forEach((f) => {
            const verifyIdTeam = taskUsers.find(e => e.idTask === f.idTask)
            if(items.length === 0) items.push(verifyIdTeam)
    
            if(verifyIdTeam && !(items || []).some(s => s.idTask === verifyIdTeam.idTask)) 
                items.push(verifyIdTeam)
            
        })
    
        return items
    }

    const returnTotalTasks = () => {
        return {
            total: (returnNewTask() || []).length,
            totalDone: (returnNewTask()  || []).filter(f => f.done).length,
            totalNotDone: (returnNewTask()  || []).filter(f => !f.done).length
        }
    }

    const returnNewGoalsByUsers = () => {
        let items = [];
        (teamsAndUsersByUser || []).forEach((f) => {
            const verifyIdTeam = teamsAndUsersByUser.find(e => e.idGoal === f.idGoal)
            if(items.length === 0) items.push(verifyIdTeam)
    
            if(verifyIdTeam && !(items || []).some(s => s.idGoal === verifyIdTeam.idGoal)) 
                items.push(verifyIdTeam)
            
        })
    
        return items
    }

    const redirectRouter = (route) => {
        navigate(route)
    }

    return (
        <>
            <main>

                <div className='w-full grid justify-center my-8 gap-x-8 grid-cols-[20%,70%] text-black'>
                    <div className='flex flex-col gap-8'>
                        <Profile payload={payload} />

                        <div className='bg-white rounded-md shadow-md flex flex-col w-full p-4'>
                            <h1>Tarefas</h1>
                            <div className='flex flex-col gap-1'>
                                <div className='w-full rounded-md p-1 text-white bg-green-500'>
                                    <span>
                                        Total de tarefas:
                                        <span className='text-xl font-bold'> {returnTotalTasks().total} </span>
                                    </span>
                                </div>
                                <div className='w-full rounded-md p-1 text-white bg-yellow-500'>
                                    <span>
                                        Tarefas Concluídas:
                                        <span className='text-xl font-bold'> {returnTotalTasks().totalDone} </span>
                                    </span>
                                </div>
                                <div className='w-full rounded-md p-1 text-white bg-red-500'>
                                    <span>
                                        Tarefas a serem concluídas:
                                        <span className='text-xl font-bold'> {returnTotalTasks().totalNotDone} </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col'>

                    <div>
                            <h1 className='text-bee-blue-clean mb-2 font-bold cursor-default text-center'>Jeito de Ser</h1>
                            <div className='mx-auto flex flex-row items-center justify-center gap-4 mb-2'>
                                <div className='bg-white w-[300px] h-[300px] overflow-y-scroll rounded-3xl shadow-lg py-3 px-3 flex flex-col items-center cursor-pointer'>
                                    {(futureVisions || []).map((x) => {
                                        return(
                                            <>
                                            <h1 className="text-bee-strong-1 text-xl font-bold text-center uppercase hover:text-bee-blue-clean"> {x.title} </h1>
                                            <p> {x.description} </p>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className='bg-white w-[300px] h-[300px] overflow-y-scroll rounded-3xl shadow-lg py-3 px-3 flex flex-col items-center cursor-pointer'>
                                    {(prinples || []).map((x) => {
                                        return(
                                            <>
                                            <h1 className="text-bee-strong-1 text-xl font-bold text-center uppercase hover:text-bee-blue-clean"> {x.title} </h1>
                                            <p> {x.description} </p>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className='bg-white w-[300px] h-[300px] overflow-y-scroll rounded-3xl shadow-lg py-3 px-3 flex flex-col items-center cursor-pointer'>
                                    {(proposals || []).map((x) => {
                                        return(
                                            <>
                                            <h1 className="text-bee-strong-1 text-xl font-bold text-center uppercase hover:text-bee-blue-clean"> {x.title} </h1>
                                            <p> {x.description} </p>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <h1 className='text-sm text-bee-blue-clean mb-2 cursor-default'>OKRs Individuais</h1>
                            <div className='mx-auto flex flex-wrap gap-4 mb-2'>
                                {(returnNewGoalsByUsers() || []).filter(f => f.idUser === parseInt(idUser)).map(x => {
                                    return(
                                        <>
                                        <div className='bg-white w-[300px] h-[300px] overflow-y-scroll rounded-3xl shadow-lg py-3 px-3 flex flex-col items-center cursor-pointer'>
                                            <span onClick={() => redirectRouter(`goal/${x.idGoal}`)} className="text-bee-strong-1 text-xl font-bold text-center uppercase hover:text-bee-blue-clean"> {x.nameGoal} </span>
                                            {(goalUsers || []).filter(e => e.idGoal === x.idGoal && e.idUser === parseInt(idUser)).map((item) => {
                                                
                                                return(
                                                    <Disclosure>
                                                        <Disclosure.Button className="w-full bg-white p-4 rounded-xl shadow-lg my-1 cursor-pointer">
                                                            <h1 className='text-black uppercase text-center font-bold text-[12px]'> {item.name} </h1>
                                                        </Disclosure.Button>
                                                        <>
                                                        {(newGoalUsersKrs.filter(e => e.idGoalUser === item.id)[0]?.krs.map((kr) => {
                                                            return(
                                                                <Disclosure.Panel className='bg-bee-blue-clean p-2 my-1 uppercase text-[10px] rounded-xl text-white shadow-lg font-bold'>
                                                                    <span> {kr.nameKr} </span>
                                                                </Disclosure.Panel>
                                                            )
                                                        }))}
                                                        </>

                                                    </Disclosure>
                                                )
                                            })}
                                        </div>
                                        </>
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