import moment from "moment"
import { useEffect } from "react"
import { useState } from "react"
import taskUsersApi from "../api/taskUsersApi"
import { calcDate } from "../utilis"
import SwitchToggle from "./switchToggle"


const ListTasks = ({
    tasksUser,
    kr, 
    teamUsers, 
    setUser,
    navigate,
    idGoal,
    idCompany,
    setQueryUpdate,
    queryUpdate,
    updateTask, 
    user}) => {
    const [enabled, setEnabled] = useState(false)
    const [index, setIndex] = useState(null)
    const [message, setMessage] = useState("")

    const taskDone = (i, idTask) => {
        setEnabled((x) => !x)
        setIndex(i)

        taskUsersApi.update(idTask, {done:!enabled && index === i})
        .then(() => {
            setMessage("Tarefa concluída")
            setQueryUpdate((x) => !x)
            navigate({
              pathname: `/empresas/${idCompany}/objetivo/${idGoal}`,
              search: `?update=${queryUpdate}`
            })
            
          })
          .catch((error) => {
            console.error(error)
            setMessage("Algo deu errado!")
          })
    }

    return(
        <div className='w-full p-2'>

            { (tasksUser.filter(e => e.idGoalTeam === kr.idGoalTeam && e.idGoalsTeamKr === kr.idgoalTeamsKr)).map((task, i) => {
                return(
                <div className={`${i === 0 || i%2==0? 'flex justify-between bg-rose-300 m-1 p-4': 'flex justify-between bg-rose-200 m-1 p-4'}`}>
                    <span className='mr-4'> {task.nameTask} </span>
                    <span className='ml-4'> {!task?.nameUser? "Ainda não existe usuário para executar a tarefa": task?.nameUser} </span>
                    {task.nameUser &&
                    <>
                    <span className='ml-4'> {task.done? "Tarefa concluída":calcDate(task.finalDate) > 0? `Faltam ${calcDate(task.finalDate)} dias`: `${calcDate(task.finalDate) * -1} de atraso`} </span>
                    <span>
                        <SwitchToggle 
                            setEnabled={setEnabled} 
                            enabled={enabled} 
                            taskDone={taskDone} 
                            i={i} 
                            index={index}
                            idTask={task.idTask}
                            done={task.done}
                        />
                    </span>
                    </>
                    }
                    <div>
                    <select onChange={({ target }) => setUser(target.value)} className='mr-2' name="user">
                    <option selected disabled >Adicionar Usuário</option>
                        {(teamUsers || []).filter(e => e.idTeam === kr.idTeam).map((user) => {
                        return(
                            <option value={user.idUser} > {user.emailUser} </option>
                        )
                        })}
                    </select>
                    <button type='button' onClick={() => updateTask(task.idTaskUser,user)} className='ml-2'> OK </button>
                    </div>
                    <span> Data Final: {moment(task.finalDate).format('DD/MM/YY')} </span>
                </div>
                )
            }) } 
        </div>
    )
}

export default ListTasks