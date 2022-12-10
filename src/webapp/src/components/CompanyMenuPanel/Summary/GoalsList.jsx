import { Disclosure } from '@headlessui/react'

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
                    <div className="bg-white w-[500px] min-h-[300px] rounded-md p-2 flex flex-col items-center">
                    <span className="text-[#5500C3] text-lg font-bold">
                        {goal.nameGoal}
                    </span>
    
                    <span className="text-[#5500C3] text-xs mt-2 font-bold">Lista de Krs</span>
                    {(goalKrs || []).filter(e => e.idGoal === goal.idGoal).map((krs) => {
                        return(
                            <div className="w-full flex m-1 flex-wrap text-sm justify-center">
                                <span className="bg-[#5500C3] p-1 rounded cursor-default">
                                    {krs.name}
                                </span>
                            </div>
                        )
                    })}

                    <span className="text-[#5500C3] text-xs mt-5 font-bold">
                        Times
                    </span>
    
                    <div className="w-full flex gap-2 flex-wrap text-sm justify-center">
                        {teams(goal.idGoal).map((team) => {
                            return(
                                <div className="flex flex-col items-center gap-1 bg-gray-300 p-1 rounded-md">
                                    <span className="bg-[#5500C3] p-1 mb-2 rounded cursor-default">
                                        {team.nameTeam}
                                    </span>
                                    {(goalAndTeams || []).filter(e => e.idTeam === team.idTeam && e.idGoal === team.idGoal).map((goalTeam) => {
                                        return(
                                            <Disclosure>
                                                <Disclosure.Button className="bg-[#5500C3] p-1 rounded cursor-pointer">
                                                    {goalTeam.nameGoalTeam}
                                                </Disclosure.Button>
                                                {goalTeam.idGoalTeam &&
                                                <>
                                                {(krs || []).filter(e => e.idGoalTeam === goalTeam.idGoalTeam).map((kr) => {
                                                    return(
                                                        <Disclosure.Panel className="bg-pink-500 p-1 rounded cursor-default">
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