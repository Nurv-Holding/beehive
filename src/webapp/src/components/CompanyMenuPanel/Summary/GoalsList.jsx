import { Disclosure } from '@headlessui/react'

const GoalsList = ({ companyGoals, goalKrs }) => {

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
                        <div className="flex flex-col items-center gap-1 bg-gray-300 p-1 rounded-md">
                            <span className="bg-[#5500C3] p-1 mb-2 rounded cursor-default">
                                nome do time
                            </span>
    
    
                            <Disclosure>
                                <Disclosure.Button className="bg-[#5500C3] p-1 rounded cursor-pointer">
                                    nome do objetivo do time
                                </Disclosure.Button>
                                <Disclosure.Panel className="bg-pink-500 p-1 rounded cursor-default">
                                    nome do kr
                                </Disclosure.Panel>
                            </Disclosure>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default GoalsList