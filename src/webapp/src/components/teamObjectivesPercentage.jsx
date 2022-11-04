import { calcPercentage } from "../utilis"

function TeamObjectivesPercentage() {
    return (
        <div className='container-percentage-okr'>
            <div>
                <p> Progresso do Objetivo </p>
                <div className='container-infos-percentage'>
                    <div className={`percentage-my-progress w-[0%]`}></div>
                    <span>0% concluído</span>
                </div>
            </div>
        </div>
    )
}

export default TeamObjectivesPercentage
