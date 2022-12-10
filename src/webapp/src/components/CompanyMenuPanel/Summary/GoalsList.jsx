import { Disclosure } from '@headlessui/react'
import { Link } from "react-router-dom"

const GoalsList = ({ companyGoals, goalKrs, goalAndTeams, krs }) => {

    const teams = (idGoal) => {
        let newItems = []
    
        goalAndTeams?.filter(e => e.idGoal === idGoal).forEach((x) => {
            if(newItems.length === 0)
                newItems.push(x)
    
            if(newItems.filter(d => d.idTeam === x.idTeam && d.idGoal === x.idGoal).length === 0)
                newItems.push(x)
    
        })
    
        return newItems
    }

    return (
        <div className="mx-auto flex flex-row gap-4 flex-wrap mb-2">
            {(companyGoals || []).map((goal) => {
                return(
                    <div className="bg-slate-100 w-[500px] min-h-[300px] rounded-3xl shadow-lg p-2 flex flex-col items-center">
                        <span className="text-[#5500C3] text-2xl font-bold">
                            <Link to={`goal/${goal.idGoal}`}>
                                {goal.nameGoal}
                            </Link>
                        </span>
    
                        <span className="text-[#5500C3] text-xs mt-2 font-bold">Lista de Krs</span>
                        <div className='flex flex-row'>
                            {(goalKrs || []).filter(e => e.idGoal === goal.idGoal).map((krs) => {
                                return(
                                    <div className="w-full flex m-1 flex-wrap text-sm justify-center">
                                        <div className="bg-white p-6 rounded-xl text-black shadow-lg font-bold cursor-default">
                                            {krs.name}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <span className="text-[#5500C3] text-xs mt-5 font-bold">
                            Times
                        </span>
    
                        <div className="w-full flex gap-2 flex-wrap text-sm justify-center">
                            {teams(goal.idGoal).map((team) => {
                                return(
                                    <div className="flex flex-col items-center gap-1 bg-white shadow-lg p-1 rounded-xl">
                                        <div className="bg-white p-6 rounded-xl text-black shadow-lg font-bold cursor-default">
                                            {team.nameTeam}
                                        </div>
                                        {(goalAndTeams || []).filter(e => e.idTeam === team.idTeam && e.idGoal === team.idGoal).map((goalTeam) => {
                                            return(
                                                <Disclosure>
                                                    <Disclosure.Button className="bg-[#5500C3] p-3 rounded-xl text-xs text-white shadow-lg font-bold cursor-pointer">
                                                        {goalTeam.nameGoalTeam}
                                                    </Disclosure.Button>
                                                    {goalTeam.idGoalTeam &&
                                                    <>
                                                    {(krs || []).filter(e => e.idGoalTeam === goalTeam.idGoalTeam).map((kr) => {
                                                        return(
                                                            <Disclosure.Panel className="bg-pink-500 p-2 text-xs rounded-xl text-black shadow-lg font-bold cursor-default">
                                                                {kr.nameGoalTeamKrs}
                                                            </Disclosure.Panel>
                                                        )
                                                    })}
                                                    </>
                                                    }

                                                </Disclosure>
                                            )
                                        })}
                    
                                    </div>
                                )
                            })}
        
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GoalsList