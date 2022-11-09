import moment from "moment"
import { calcPercentage } from "../utilis"
import Modal from "./empresasTabPanels/objetivos/components/Modal"
import ChartGoalTeamQuartely from "./ChartGoalTeamQuartely"
import ChartGoalTeamYearly from "./ChartGoalTeamYearly"

const TeamKrModal = ({
    closeModal,
    krs,
    isOpen,
    stateDone,
    goalTeamKrsUpdate,
    historyGoalTeamKrs,
    done
}) => {

    return (
        <div className="w-2/4">
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <span className="text-lg uppercase mx-2">{krs.nameGoalTeam}</span>
                <span className="text-gray-600 text-xs mx-2">
                    Atualizado em: {moment(krs.updateGoalsTeamKrs).format("DD/MM/YY")}
                </span>
                <div className="flex flex-col gap-[2%] mt-4">
                    <div className="flex gap-2 items-center">
                        <div>
                            <input onChange={stateDone} type="text" className="input-style" name="done" placeholder="Atualizar os dados" />
                        </div>
                        <button onClick={() => goalTeamKrsUpdate(krs.idgoalTeamsKr, krs.idProcessGoalsTeams, calcPercentage((krs.doneGoalsTeamKr + done), krs.yearlyGoalsTeamKr), calcPercentage((krs.doneGoalsTeamKr + done), krs.quarterlyGoalsTeamKr))} type="button" className="submit-button">OK</button>
                    </div>
                    <div className="flex flex-col gap-[2%] mt-4">
                        <span>Meta Trimestral <span className="text-gray-600 text-xs"> {krs.quarterlyGoalsTeamKr} </span></span>
                        <div className='percentage-container-disclosure w-[90%] mt-2'>
                            <div className='percentage-bar-quartely'></div>
                        </div>
                            <style>{`
                                .percentage-bar-quartely {
                                  height: 1rem;
                                  border-radius: 0.25rem;
                                  --tw-bg-opacity: 1;
                                  background-color: rgb(85 0 195 / var(--tw-bg-opacity));
                                  width: ${calcPercentage(krs.doneGoalsTeamKr, krs.quarterlyGoalsTeamKr)}%;
                                }
                            `}</style>
                        <span className="text-xs">{calcPercentage(krs.doneGoalsTeamKr, krs.quarterlyGoalsTeamKr)}% concluído</span>
                        <span className="text-gray-600 text-sm mt-2">Atual: {krs.doneGoalsTeamKr}</span>
                    </div>

                    <div className="flex flex-col gap-[2%] mt-4">
                        <span>Meta Anual <span className="text-gray-600 text-xs"> {krs.yearlyGoalsTeamKr} </span></span>
                        <div className='percentage-container-disclosure w-[90%] mt-2'>
                            <div className='percentage-bar-yearly'></div>
                        </div>
                        <style>{`
                                .percentage-bar-yearly {
                                  height: 1rem;
                                  border-radius: 0.25rem;
                                  --tw-bg-opacity: 1;
                                  background-color: rgb(85 0 195 / var(--tw-bg-opacity));
                                  width: ${calcPercentage(krs.doneGoalsTeamKr, krs.yearlyGoalsTeamKr)}%;
                                }
                            `}</style>
                        <span className="tetx-xs">{calcPercentage(krs.doneGoalsTeamKr, krs.yearlyGoalsTeamKr)}% concluído</span>
                        <span className="text-gray-600 text-sm mt-2">Atual: {krs.doneGoalsTeamKr}</span>
                    </div>

                    <div className="w-[60%] self-center">
                        <ChartGoalTeamQuartely
                            
                            items={
                                historyGoalTeamKrs.filter(e => e?.idGoalsTeamKr === krs.idgoalTeamsKr)
                            }
                            
                            title={"Trimestral"}
                        />
                    </div>

                    <div className="w-[60%] self-center mt-8">
                        <ChartGoalTeamYearly
                            
                            items={
                                historyGoalTeamKrs.filter(e => e?.idGoalsTeamKr === krs.idgoalTeamsKr)
                            }
                            
                            title={"Anual"}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default TeamKrModal