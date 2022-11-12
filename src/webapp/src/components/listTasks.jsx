import moment from "moment"
import { calcDate } from "../utilis"


const ListTasks = ({tasksUser, kr, teamUsers, setUser, updateTask, user}) => {
    return(
        <div className='w-full p-2 bg-white'>

            { (tasksUser.filter(e => e.idGoalTeam === kr.idGoalTeam && e.idGoalsTeamKr === kr.idgoalTeamsKr)).map((task) => {
                return(
                <div className='flex justify-between'>
                    <span className='mr-4'> {task.nameTask} </span>
                    <span className='ml-4'> {!task?.nameUser? "Ainda não existe usuário para executar a tarefa": task?.nameUser} </span>
                    {task.nameUser &&
                    <span className='ml-4'> {calcDate(task.finalDate) > 0? `Faltam ${calcDate(task.finalDate)} dias`: `${calcDate(task.finalDate) * -1} de atraso`} </span>
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