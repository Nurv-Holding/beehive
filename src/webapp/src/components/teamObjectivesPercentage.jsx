import { calcPercentage } from "../utilis"

function TeamObjectivesPercentage({ tasksToGoalQuantify=null,tasksToGoalQuantifyDone=null }) {
    return(
            <div className='container-percentage-okr'>
                <div>
                    <p> Progresso do Objetivo </p>
                    <div className='container-infos-percentage'>
                        <div className={`percentage-my-progress w-[${calcPercentage(tasksToGoalQuantifyDone?.totalTaskDone,tasksToGoalQuantify?.totalTask)}%]`}></div>
                        <span> 
                            {calcPercentage(tasksToGoalQuantifyDone?.totalTaskDone,tasksToGoalQuantify?.totalTask)}
                            % concluído
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default TeamObjectivesPercentage
