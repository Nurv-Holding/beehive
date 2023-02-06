import { Disclosure } from "@headlessui/react"

function ListUsers({ users, newAllTeamsAndUsers, newGoalUsersAllKrs, goalUsers }) {
  return (
    <div className='flex flex-col w-full'>
      < div
        className='login-bg h-44 w-full'
      >
      </div>

      <h1 className='text-3xl text-bee-blue-clean font-bold text-center p-4'>OKRs</h1>

      <div className='grid grid-cols-3 gap-3 w-[90%] mx-auto p-4'>
        {(users || []).map((user) => {
          return (
            <>
              <div className="bg-white w-full aspect-square overflow-y-scroll h-[500px] rounded-3xl shadow-lg flex flex-col items-center justify-center">
                <h1 className="text-bee-strong-1 text-xl font-bold text-center uppercase" data-bs-toggle="modal" data-bs-target="#members">
                  {user.name}
                </h1>

                <span className="text-bee-blue-clean text-xs mt-2 font-bold">Email</span>
                <div className='w-full text-base font-bold text-black text-center'>
                  {user.email}
                </div>

                
                <div className='flex flex-col items-center gap-1 w-full'>
                  <span className="text-bee-blue-clean text-xs mt-2 font-bold">Lista de Times</span>
                  {user?.teams.map((team) => {
                    return(
                      <div className="w-full">
                        <div className="bg-white m-1 rounded-xl w-full">
                          <h1 className='text-black uppercase text-center font-bold text-[12px]'>
                          {team.nameTeam}
                          </h1>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <span className="text-bee-blue-clean text-xs mt-2 text-center font-bold"> Objetivos </span>
                  <div> {(newAllTeamsAndUsers || []).filter(e => e.idUser === user.id).map((goal) => {
                    return(
                      <div>
                        <span className="text-black"> {goal.nameGoal} </span>
                        {(goalUsers || []).filter(f => goal.idGoal === f.idGoal && goal.idUser === f.idUser).map((goalUser) => {
                          return(
                            <div>
                              <Disclosure>
                                <Disclosure.Button className="w-full bg-white p-4 rounded-xl shadow-lg my-1 cursor-pointer">
                                  <h1 className='text-black uppercase text-center font-bold text-[12px]'> {goalUser.name} </h1>
                                </Disclosure.Button>
                                {(newGoalUsersAllKrs || []).filter(e => e.idGoalUser === goalUser.id)[0]?.krs.map((kr) => {
                                  return(
                                    <Disclosure.Panel className='bg-bee-blue-clean p-2 my-1 uppercase text-[10px] rounded-xl text-white shadow-lg font-bold'>
                                      <span> {kr.nameKr} </span>
                                    </Disclosure.Panel>
                                  )
                                })}
                              </Disclosure>
                              
                            </div>
                          )
                        })}
                      </div>
                    )
                  })} </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ListUsers;







