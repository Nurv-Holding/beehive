import moment from "moment"

const HistoryKrsTeamList = ({ histories, team }) => {
    return (
        <main className='flex flex-col items-center'>
            <span className='text-bold text-2xl text-white uppercase mt-8'> {team.name} </span>
            {JSON.stringify(histories)}
            {(histories || []).map((history) => {
                return(
                    <div className='w-11/12'> {/*Time */}
                    <span className='text-bold text-xl text-white uppercase m-2'> {history.nameGoalTeam} </span>{/*objetivo time */}
                        <div className='container-history'>{/*Krs de objetivo time */}
                            <div className='flex flex-col items-center'>
                                <span className="text-xl font-bold mb-2 ml-4 self-start text-[#5500C3] bold cursor-default"> {history.nameGoalsTeamKr} </span>
                                <div className='container-table-grid-team'>
                                    <table class="table-auto w-full">
                                        <thead>
                                            <tr>
                                                <th className='container-title-grid'>Data</th>
                                                <th className='container-title-grid'>Valor inicial</th>
                                                <th className='container-title-grid'>Valor atualizado</th>
                                                <th className='container-title-grid'>Alvo trimestral: </th>
                                                <th className='container-title-grid'>Alvo anual: </th>
                                                <th className='container-title-grid'>Atualizado por</th>
                                                <th className='container-title-grid'>Status</th>
                                            </tr>
                                        </thead>
        
                                        <tbody className='text-center'>
                                            <tr>
                                                <td> data </td>
                                                <td> de </td>
                                                <td> para </td>
                                                <td> alvo tri </td>
                                                <td> alvo anual </td>
                                                <td> nome </td>
                                                <td> ativo/encerrado </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </main>
    )
}

export default HistoryKrsTeamList