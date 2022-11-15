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

        taskUsersApi.update(idTask, {done:!enabled})
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
        <div className='w-full'>

            { (tasksUser.filter(e => e.idGoalTeam === kr.idGoalTeam && e.idGoalsTeamKr === kr.idgoalTeamsKr)).map((task, i) => {
                return(
                <div className={`${i === 0 || i%2===0? 'flex justify-between items-center rounded-lg bg-rose-300 mx-2 p-2 my-2': 'flex justify-between items-center rounded-lg bg-rose-200 mx-2 p-2 my-2'}`}>
                    <span> {task.nameTask} </span>
                    <span> {!task?.nameUser? "Ainda não existe usuário para executar a tarefa": task?.nameUser} </span>
                    {task.nameUser &&
                    <>
                    <span> {task.done? "Tarefa concluída":calcDate(task.finalDate) > 0? `Faltam ${calcDate(task.finalDate)}`: `${calcDate(task.finalDate) * -1} dias de atraso`} </span>
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
                    <div className="flex">
                    <select onChange={({ target }) => setUser(target.value)} className='input-style' name="user">
                    <option selected disabled >Adicionar Usuário</option>
                        {(teamUsers || []).filter(e => e.idTeam === kr.idTeam).map((user) => {
                        return(
                            <option value={user.idUser} > {user.nameUser} </option>
                        )
                        })}
                    </select>
                    <button type='button' onClick={() => updateTask(task.idTaskUser,user)} className='submit-button ml-2 mt-1'> OK </button>
                    </div>
                    <span> Data Final: {moment(task.finalDate).format('DD/MM/YY')} </span>
                </div>
                )
            }) } 
        </div>
    )
}

export default ListTasks