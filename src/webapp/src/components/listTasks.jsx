import moment from "moment"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import taskUsersApi from "../api/taskUsersApi"
import { calcDate } from "../utils/utilis"
import TaskDone from "./taskDone"
import DescriptionTask from "./descriptionTask"

const ListTasks = ({
    tasksUser,
    kr, 
    teamUsers,
    goal,
    setUser,
    navigate,
    idGoal,
    idCompany,
    updateTask, 
    user}) => {
    const [setMessage] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const [openModalTaskDone, setOpenModalTaskDone] = useState(false)
    const [openDescriptionModal, setOpenDescriptionModal] = useState(false)
    const [description, setDescription] = useState("")
    const [taskState, setTaskState] = useState(null)

    const closeModal = () => {
        setOpenModalTaskDone(false)
    }

    const closeDescriptionModal = () => {
        setOpenDescriptionModal(false)
    }

    const openDescription = (item) => {
        setOpenDescriptionModal(true)
        setTaskState(item)
    }

    const openTaskDone = (item) => {
        setOpenModalTaskDone(true)
        setTaskState(item)
    }

    const taskDone = (idTaskUser) => {
        searchParams.delete('update')
        setSearchParams(searchParams)

        const newData = {
            description,
            done: true
        }

        taskUsersApi.update(idTaskUser, newData)
        .then((x) => {
            console.log(x)
            setMessage("Tarefa concluída")
            
            navigate({
              pathname: `/company/${idCompany}/goal/${idGoal}`,
              search: `?update=${true}`
            })

            closeModal()
            
          })
          .catch((error) => {
            console.error(error)
            setMessage("Algo deu errado!")
          })
    }

    return(
        <div className='w-full'>

            { (tasksUser.filter(e => e.idGoalTeam === kr.idGoalTeam && e.idGoalsTeamKr === kr.idgoalTeamsKr)).map((task, i) => {
                return(
                <div className={`${task.done? "flex justify-between items-center rounded-lg bg-blue-300 mx-2 p-2 my-2": "flex justify-between items-center rounded-lg bg-yellow-200 mx-2 p-2 my-2flex justify-between items-center rounded-lg bg-yellow-200 mx-2 p-2 my-2"}`}>
                    <span> {task.nameTask} </span>
                    <span> {!task?.nameUser? "Ainda não existe usuário para executar a tarefa": task?.nameUser} </span>
                    {task.nameUser &&
                    <>
                    <span className={`${calcDate(task.finalDate)}` < 0 && !task.done && "text-red-400"}> 
                        {task.done? `Tarefa concluída em: ${moment(task.updatedAt).format("DD/MM")}`:calcDate(task.finalDate) > 0? `Faltam ${calcDate(task.finalDate)}`: `${calcDate(task.finalDate) * -1} dias de atraso`} 
                    </span>
                    {!(!!goal.status) && !task.done?
                    <div>
                        {!task?.done &&
                        <button className="bg-[#5500c3] text-white p-1 rounded-lg" onClick={() => openTaskDone(task)}> Concluir </button>
                        }
                        <TaskDone
                            setOpenModalTaskDone={setOpenModalTaskDone}
                            openModalTaskDone={openModalTaskDone}
                            closeModal={closeModal}
                            idTaskUser={taskState?.idTaskUser}
                            done={taskState?.done}
                            name={taskState?.nameUser}
                            taskDone={taskDone}
                            setDescription={setDescription}
                        />
                    </div>
                    :
                    <div>
                        <button onClick={() => openDescription(task)} > Lições Aprendidas </button>
                        <DescriptionTask
                            openDescriptionModal={openDescriptionModal}
                            closeDescriptionModal={closeDescriptionModal}
                            setOpenDescriptionModal={setOpenDescriptionModal}
                            description={task.description}
                            task={taskState}
                        />
                    </div>
                    }
         
                    </>
                    }
                    {!(!!task.nameUser) &&
                    <div className="flex">
                        <select onChange={({ target }) => setUser(target.value)} className='input-style' name="user">
                        <option selected disabled >Adicionar Usuário</option>
                            {(teamUsers || []).filter(e => e.idTeam === kr.idTeam).map((user) => {
                            return(
                                <option value={user.idUser} > {user.emailUser} </option>
                            )
                            })}
                        </select>
                        <button type='button' onClick={() => updateTask(task.idTaskUser,user)} className='submit-button ml-2 mt-1'> OK </button>
                    </div>
                    }

                    <span> Data Final: {moment(task.finalDate).format('DD/MM/YY')} </span>
                </div>
                )
            }) } 
        </div>
    )
}

export default ListTasks