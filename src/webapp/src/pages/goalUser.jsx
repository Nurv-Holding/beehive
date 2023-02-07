import { useContext, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AddUserKr from '../components/AddUserKr';
import FinishingUserGoal from '../components/FinishingUserGoal';
import GoalUsersKrs from '../components/GoalUsersKrs';
import { ContextCompany } from '../context/ContextCompany';
import historyGoalsUserKrsApi from '../api/historyGoalsUserKrsApi';
import goalUserApi from '../api/goalUserApi';
import AddGoalUser from '../components/AddGoalUser';
import moment from 'moment';
import { calcDate } from '../utils/utilis';

function GoalUser() {
    const {
        idCompany,
        idGoal,
        payload,
        goalUserKrs,
        newGoalUsersKrs,
        teamsAndUsersByGoal,
        idUser,
        goalUsers,
        goal,
        taskUsers
    } = useContext(ContextCompany)

    const [isOpenAddKr, setIsOpenAddKr] = useState(false)
    const [isOpenCloseGoal, setIsOpenCloseGoal] = useState(false)
    const [item, setItem] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const [message, setMessage] = useState("")

    const path= `/company/${idCompany}/user/${idUser}/goal/${idGoal}`

    const returnNewTeamsAndUsers = () => {
        let items = [];
        (teamsAndUsersByGoal || []).forEach((f) => {
            const verifyIdTeam = teamsAndUsersByGoal.find(e => e.idTeam === f.idTeam)
            if(items.length === 0) items.push(verifyIdTeam)
    
            if(verifyIdTeam && !(items || []).some(s => s.idTeam === verifyIdTeam.idTeam)) 
                items.push(verifyIdTeam)
            
        })
    
        return items
    }

    function openModalAddKr(item) {
        setIsOpenAddKr(true)
        setItem(item)
    }

    function openModalCloseGoal(item) {
        setIsOpenCloseGoal(true)
        setItem(item)
    }

    function closeModal() {
        setIsOpenAddKr(false)
        setIsOpenCloseGoal(false)
    }

    // const routerBack = () => {
    //     navigate(-1)
    // }

    const finishGoalUsersKr = async (note, kr) => {
        searchParams.delete('update')
        setSearchParams(searchParams)
    
        if (note === "") {
            setMessage("Primeiro precisa preencher os campos")
    
        } else {
            const { data } = await historyGoalsUserKrsApi.getHistoryKrsUsersByGoal(idCompany, kr.idKr)
            const history = data.length !== 0 ? data[data.length - 1] : null
            const result = await goalUserApi.updateKr(kr.idKr, { status: true })
            const goalKr = result.data
    
            const newData = {
                idGoalsUserKr: goalKr?.id,
                quaPercentage: history?.quaPercentage || 0,
                yeaPercentage: history?.yeaPercentage || 0,
                to: history?.to || 0,
                from: history?.from || 0,
                status: !!goalKr?.status,
                note
            }
    
            historyGoalsUserKrsApi.create(idCompany, newData)
            .then(() => {
                navigate({
                pathname: `${path}`,
                search: `?update=${true}`
                })
    
                closeModal()
            })
            .catch((error) => {
                console.error(error)
                setMessage("Algo deu errado!")
            })
        }
    
    }

    const finishingGoal = async (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        await goalUserKrs.forEach(async (kr) => {
            if(!kr.krStatus){

                const note = `Objetivo encerrado por: ${payload?.name}`

                await finishGoalUsersKr(note, kr)

            }

        })

        goalUserApi.update(item.id, {status: true})
        .then(() => {
            
            navigate({
              pathname: `${path}`,
              search: `?update=${true}`
            })
    
            closeModal()
          })
          .catch((error) => {
            console.error(error)
          })
    }


    return (
        <>
            {/* <Header /> */}

            <main className='flex flex-col items-center pt-8'>
                <AddGoalUser 
                    idRef={"addGoalUser"} 
                    idGoal={idGoal} 
                    idUser={idUser} 
                    idCompany={idCompany} 
                    path={path}
                    payload={payload} 
                />
                {/* <div className='flex flex-row w-full justify-center items-center'>
                    <button onClick={routerBack} className="p-3 shadow-md text-xl rounded-full flex justify-center items-center bg-white hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </button>

                    <TitleCompany className='text-bee' name={company?.name} />
                </div> */}
                <div className='w-11/12 flex flex-col'>
                    <div className='container-two-percentage mb-4'>
                        <div className='container-percentage-okr flex flex-col'>
                            <div className='flex justify-between'>
                                <span className='font-bold text-xl text-bee-strong-1 uppercase'> {goal?.name} </span>
                                <button className="modal-btn" data-bs-toggle="modal" data-bs-target="#addGoalUser">
                                    Adicionar Objetivo Individual
                                </button>
                            </div>
                            
                            <div className='border-t pt-4 border-white'>
                                <span className='font-bold text-xl text-bee-strong-1'>Times: </span>
                                <div className='flex gap-2'>
                                    {(returnNewTeamsAndUsers() || []).map((team) => {
                                        return(
                                            <span className='font-bold text-lg mt-2 text-bee-blue-clean bg-white p-2 rounded-md shadow-md'> {team.nameTeam} </span>
                                        )
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        {(goalUsers || []).filter(e => e.idGoal === parseInt(idGoal)  && e.idUser === parseInt(idUser)).map((goalUser) => {
                            return(
                                <div className='mt-4'>
                                    <div className='flex justify-between'>
                                        <span className='font-bold text-lg text-bee-blue-clean uppercase'> {goalUser.name} </span>
                                        <div className='container-percentage-okr flex flex-row justify-end gap-4'>
                                            <button className="modal-btn" onClick={() => openModalAddKr(goalUser)}>
                                                Adicionar KR
                                            </button>
                                            <AddUserKr
                                                isOpen={isOpenAddKr}
                                                closeModal={closeModal}
                                                idUser={parseInt(idUser)}
                                                idCompany={idCompany}
                                                idGoalsUser={item?.id}
                                                nameGoalUser={item?.name}
                                                idGoal={idGoal}
                                            />

                                            <button className="modal-btn" onClick={() => openModalCloseGoal(goalUser)}>
                                                Encerrar objetivo
                                            </button>

                                            <FinishingUserGoal
                                                isOpen={isOpenCloseGoal}
                                                closeModal={closeModal}
                                                finishingGoal={finishingGoal}
                                                item={item}
                                            />
                                        </div>
                                    </div>

                                    {(newGoalUsersKrs || []).filter(f => f.idGoalUser === goalUser.id && f.idGoal === parseInt(idGoal))[0]?.krs?.map((kr) => {
                                        return(
                                            <div className='mt-4'>
                                                <GoalUsersKrs 
                                                kr={kr}
                                                finishGoalUsersKr={finishGoalUsersKr}
                                                message={message}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-full mb-4'>
                        <h1 className='text-center font-bold text-lg my-4 text-bee-strong-1 uppercase'> Tarefas </h1>
                        <div className='w-full'>
                            {(taskUsers || [])?.filter(f => f.idGoal === parseInt(idGoal))?.map((task) => {
                                return(
                                    <div className="bg-white rounded-md p-5 mt-4 flex flex-col w-full">
                                        <span className='capitalize font-semibold'> {task.nameTask} </span>
                                        <span className={`${calcDate(task.finalDate)}` < 0 && !task.done && "text-red-400"}> 
                                            {task.done? `Tarefa concluída em: ${moment(task.updatedAt).format("DD/MM")}`:calcDate(task.finalDate) > 0? `Faltam ${calcDate(task.finalDate)}`: `${calcDate(task.finalDate) * -1} dias de atraso`} 
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default GoalUser;