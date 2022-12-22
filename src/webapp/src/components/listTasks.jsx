import moment from "moment"
import { useEffect } from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import taskUsersApi from "../api/taskUsersApi"
import { calcDate } from "../utilis"
import TaskDone from "./taskDone"
import SwitchToggle from "./switchToggle"
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
    const [enabled, setEnabled] = useState(false)
    const [index, setIndex] = useState(null)
    const [message, setMessage] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const [background, setBackground] = useState("flex justify-between items-center rounded-lg bg-yellow-200 mx-2 p-2 my-2")
    const [openModalTaskDone, setOpenModalTaskDone] = useState(false)
    const [openDescriptionModal, setOpenDescriptionModal] = useState(false)
    const [description, setDescription] = useState("")

    const closeModal = () => {
        setOpenModalTaskDone(false)
    }

    const closeDescriptionModal = () => {
        setOpenDescriptionModal(false)
    }

    const taskDone = (idTaskUser) => {
        searchParams.delete('update')
        setSearchParams(searchParams)

        const newData = {
            description,
            done: true
        }

        taskUsersApi.update(idTaskUser, newData)
        .then(() => {
            setMessage("Tarefa concluída")
            if(!enabled)
                setBackground("flex justify-between items-center rounded-lg bg-blue-300 mx-2 p-2 my-2")
            else
                setBackground("flex justify-between items-center rounded-lg bg-yellow-200 mx-2 p-2 my-2")
            
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
                <div className={`${background}`}>
                    <span> {task.nameTask} </span>
                    <span> {!task?.nameUser? "Ainda não existe usuário para executar a tarefa": task?.nameUser} </span>
                    {task.nameUser &&
                    <>
                    <span className={`${calcDate(task.finalDate)}` < 0 && !task.done && "text-red-400"}> 
                        {task.done? `Tarefa concluída em: ${moment(task.updatedAt).format("DD/MM")}`:calcDate(task.finalDate) > 0? `Faltam ${calcDate(task.finalDate)}`: `${calcDate(task.finalDate) * -1} dias de atraso`} 
                    </span>
                    {!(!!goal.status) && !task.done?
                    <div>
                        <TaskDone 
                            setOpenModalTaskDone={setOpenModalTaskDone}
                            openModalTaskDone={openModalTaskDone}
                            closeModal={closeModal}
                            idTaskUser={task.idTaskUser}
                            done={task.done}
                            taskDone={taskDone}
                            setDescription={setDescription}
                        />
                    </div>
                    :
                    <div>
                        <DescriptionTask 
                            openDescriptionModal={openDescriptionModal}
                            closeDescriptionModal={closeDescriptionModal}
                            setOpenDescriptionModal={setOpenDescriptionModal}
                            description={task.description}
                            task={task}
                        />
                    </div>
                    }
         
                    </>
                    }
                    {!(!!goal.status)&&
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