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
        <div className="mx-auto grid grid-cols-2 items-center justify-center gap-4 mb-2">
            {(companyGoals || []).map((goal) => {
                return(
                    <div className="bg-white w-[500px] h-[400px] overflow-y-scroll rounded-3xl shadow-lg py-4 px-6 flex flex-col items-center">
                        <span className="text-bee-strong-1 text-xl font-bold text-center uppercase">
                            <Link to={`goal/${goal.idGoal}`}>
                                {goal.nameGoal}
                            </Link>
                        </span>
    
                        <span className="text-bee-blue-clean text-xs mt-2 font-bold">Lista de KRs</span>
                        <div className='grid grid-cols-2 gap-3 w-full'>
                            {(goalKrs || []).filter(e => e.idGoal === goal.idGoal).map((krs) => {
                                return(
                                    <div className="w-full">
                                        <div className="bg-white w-full p-4 rounded-xl shadow-lg cursor-default">
                                            <h1 className='text-black uppercase text-center font-bold text-[12px]'>
                                                {krs.name}
                                            </h1>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <span className="text-bee-blue-clean text-xs mt-5 font-bold">
                            Times
                        </span>
    
                        <div className="w-full grid grid-cols-2 gap-3 text-sm justify-center">
                            {teams(goal.idGoal).map((team) => {
                                return(
                                    <div className="flex flex-col w-full items-center gap-1 bg-white shadow-lg p-3 rounded-xl">
                                        <div className="cursor-default">
                                            <h1 className='text-black font-bold uppercase text-[12px]'>
                                                {team.nameTeam}
                                            </h1>
                                        </div>
                                        {(goalAndTeams || []).filter(e => e.idTeam === team.idTeam && e.idGoal === team.idGoal).map((goalTeam) => {
                                            return(
                                                <Disclosure>
                                                    <Disclosure.Button className="text-bee-blue-clean py-2 px-3  uppercase rounded-xl text-[10px] text-white shadow-lg font-bold cursor-pointer">
                                                        {goalTeam.nameGoalTeam}
                                                    </Disclosure.Button>
                                                    {goalTeam.idGoalTeam &&
                                                    <>
                                                    {(krs || []).filter(e => e.idGoalTeam === goalTeam.idGoalTeam).map((kr) => {
                                                        return(
                                                            <Disclosure.Panel className="bg-bee-clean-1 p-2 uppercase text-[10px] rounded-xl text-black shadow-lg font-bold cursor-default">
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