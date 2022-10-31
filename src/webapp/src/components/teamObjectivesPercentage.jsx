import { calcPercentage } from "../utilis"

function TeamObjectivesPercentage({ tasksToGoalQuantify=null,tasksToGoalQuantifyDone=null }) {
    return(
        <div className='container-two-percentage'>
            <div className='container-percentage-okr'>
                <div className='percentage-bar-okrs'>
                    <p className='percentage-title'> Progresso do Objetivo </p>
                    <div className='container-infos-percentage'>
                        <div className='percentage-my-progress'></div>
                        <span> 
                            {calcPercentage(tasksToGoalQuantifyDone?.totalTaskDone,tasksToGoalQuantify?.totalTask)}
                            % concluído
                        </span>
                    </div>
                </div>
            </div>

            {/* <div className='container-percentage-okr'>
                <div className='percentage-bar-okrs'>
                    <p className='percentage-title'>Rendimento mensal</p>
                    <div className='container-infos-percentage'>
                        <div className='percentage-monthly-income'></div>
                    </div>

                    <p className='percentage-title mt-8'>Okrs do time</p>
                    <div className='container-infos-percentage'>
                        <div className='percentage-team-progress'></div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default TeamObjectivesPercentage
