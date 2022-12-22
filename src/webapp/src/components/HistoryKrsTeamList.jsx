import moment from "moment"

const HistoryKrsTeamList = ({ histories, team, goalTeams, goaloalTeamByKrs }) => {
    return (
        <main className='flex flex-col items-center'>
            <span className='font-bold text-2xl text-white uppercase mt-8'> {team.name} </span>
            {(goalTeams || []).filter(e => e.idTeam === team.id)?.map((goalTeam) => {
                return(
                    <div className='w-11/12'>
                    <span className='font-bold text-xl text-white uppercase m-2'> {goalTeam.nameGoalTeam} </span>
                    {(goaloalTeamByKrs || []).filter(e => e.idGoalTeam === goalTeam.idGoalTeam).map((krs) => {
                        return(
                            <div className='container-history'>
                                <span className="text-center text-xl font-bold"> {krs.nameGoalsTeamKr} </span>
                                <div className='flex flex-col items-center'>
                                    <span className="text-xl font-bold mb-2 ml-4 self-start text-[#5500C3] bold cursor-default"> {""} </span>
                                    <div className='container-table-grid-team'>
                                        <table class="table-auto w-full">
                                            <thead>
                                                <tr>
                                                    <th className='container-title-grid'>Data</th>
                                                    <th className='container-title-grid'>Valor inicial</th>
                                                    <th className='container-title-grid'>Valor atualizado</th>
                                                    <th className='container-title-grid'>Alvo trimestral: {} </th>
                                                    <th className='container-title-grid'>Alvo anual: {} </th>
                                                    <th className='container-title-grid'>Atualizado por</th>
                                                    <th className='container-title-grid'>Status</th>
                                                    <th className='container-title-grid'>Observação</th>
                                                </tr>
                                            </thead>
            
                                            <tbody className='text-center'>
                                                {(histories || []).filter(e => e.idGoalsTeamKr === krs.idgoalTeamsKr).map((history) => {
                                                    return(
                                                        <tr>
                                                            <td> {moment(history?.updateGoalTeamKr).format("DD/MM/YYYY")} </td>
                                                            <td> {history?.to} </td>
                                                            <td> {history?.from} </td>
                                                            <td> {history?.quaPercentageHistory} </td>
                                                            <td> {history?.yeaPercentageHistory} </td>
                                                            <td> {history?.user} </td>
                                                            <td> {`${!!history?.status? "Encerrado": "Ativo"}`} </td>
                                                            <td className="truncate ... max-w-[10px]"> {history?.note} </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                )
            })}

        </main>
    )
}

export default HistoryKrsTeamList