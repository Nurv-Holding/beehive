import moment from "moment"
import { useState } from "react"

import TeamObservationModal from "./TeamObservationModal"

const HistoryKrsTeamList = ({ histories, team, goalTeams, goaloalTeamByKrs, routerBack }) => {
    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <main className='flex flex-col items-center'>
            <div className='w-11/12'>
                {(goalTeams || []).filter(e => e.idTeam === team.id)?.map((goalTeam) => {
                    return (
                        <div className='w-full'>
                            <div className="w-full flex items-center justify-center my-8">
                                <button onClick={routerBack} className="p-3 text-xl rounded-full flex justify-center items-center bg-white hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                                    <ion-icon name="arrow-back-outline"></ion-icon>
                                </button>

                                <div className="flex flex-col items-center">
                                    <span className=' text-center justify-self-center text-bee-blue-clean font-bold text-2xl hover:cursor-default'>
                                        {goalTeam.nameGoalTeam}
                                    </span>
                                </div>
                            </div>
                            <span className='font-bold text-xl text-white uppercase m-2'> </span>
                            {(goaloalTeamByKrs || []).filter(e => e.idGoalTeam === goalTeam.idGoalTeam).map((krs) => {
                                return (
                                    <div className='container-history'>
                                        <span className="text-center text-xl font-bold text-bee"> {krs.nameGoalsTeamKr} </span>
                                        <div className='flex flex-col items-center'>
                                            <span className="text-xl font-bold mb-2 ml-4 self-start text-bee-blue-clean bold cursor-default"> {""} </span>
                                            <div className='container-table-grid-team'>
                                                <table class="table-auto w-full">
                                                    <thead>
                                                        <tr>
                                                            <th className='container-title-grid'>Data</th>
                                                            <th className='container-title-grid'>Valor inicial</th>
                                                            <th className='container-title-grid'>Valor atualizado</th>
                                                            <th className='container-title-grid'>Alvo trimestral: { } </th>
                                                            <th className='container-title-grid'>Alvo anual: { } </th>
                                                            <th className='container-title-grid'>Atualizado por</th>
                                                            <th className='container-title-grid'>Status</th>
                                                            <th className='container-title-grid'>Observação</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody className='text-center'>
                                                        {(histories || []).filter(e => e.idGoalsTeamKr === krs.idgoalTeamsKr).map((history) => {
                                                            return (
                                                                <tr>
                                                                    <td> {moment(history?.updateGoalTeamKr).format("DD/MM/YYYY")} </td>
                                                                    <td> {history?.to} </td>
                                                                    <td> {history?.from} </td>
                                                                    <td> {history?.quaPercentageHistory} </td>
                                                                    <td> {history?.yeaPercentageHistory} </td>
                                                                    <td> {history?.user} </td>
                                                                    <td> {history?.status ? "encerrado" : "ativo"} </td>
                                                                    <td>
                                                                        <TeamObservationModal
                                                                            history={history?.note}
                                                                            isOpen={isOpen}
                                                                            closeModal={closeModal}
                                                                            openModal={openModal}
                                                                        />
                                                                    </td>
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
            </div>

        </main>
    )
}

export default HistoryKrsTeamList