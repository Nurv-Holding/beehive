import moment from "moment"
import { calcPercentage } from "../utils/utilis"
import Modal from "./CompanyMenuPanel/Goals/components/Modal"
import ChartGoalTeamQuartely from "./ChartGoalTeamQuartely"
import ChartGoalTeamYearly from "./ChartGoalTeamYearly"

const TeamKrModal = ({
    closeModal,
    krs,
    isOpen,
    stateDone,
    setNote,
    message,
    goal,
    goalTeamKrsUpdate,
    historyGoalTeamKrs,
    done
}) => {

    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <span className="text-lg uppercase mx-2">{krs.nameGoalTeam}</span>
            <span className="text-gray-600 text-xs mx-2">
                Atualizado em: {moment(krs.updateGoalsTeamKrs).format("DD/MM/YY")}
            </span>
            <div className="flex flex-col gap-[2%] mt-4">
                {!(!!goal.status)&&
                <div className="flex gap-2 items-center">
                    <div className="flex flex-col gap-2">
                        <input onChange={stateDone} type="text" className="input-style" name="done" placeholder="Atualizar os dados" />
                        <textarea className="input-style" placeholder="Nota" onChange={({ target }) => setNote(target.value)} name="note" cols="55" rows="10"></textarea>
                        <button onClick={() => goalTeamKrsUpdate(krs.idgoalTeamsKr, krs.idProcessGoalsTeams, calcPercentage((krs.doneGoalsTeamKr + done), krs.fromYearlyGoalsTeamKr), calcPercentage((krs.doneGoalsTeamKr + done), krs.fromQuarterlyGoalsTeamKr))} type="button" className="submit-button">OK</button>
                        <span className={`${message === "Aqui vai uma mensagem" ? 'hidden': 'block'}`}> {message} </span>
                    </div>
                </div>
                }

                <div className="flex flex-col gap-[2%] mt-4">
                    <h5>Meta Trimestral:</h5>
                    <div className="flex flex-row">
                        <span className="text-gray-600 text-xs mr-4">De: {krs.toQuarterlyGoalsTeamKr}</span>
                        <span className="text-gray-600 text-xs ml-4">Para: {krs.fromQuarterlyGoalsTeamKr}</span>
                    </div>
                    <div className='percentage-container-disclosure w-[90%] mt-2 overflow-hidden'>
                        <div className='percentage-bar-quartely'></div>
                    </div>
                    <style>{`
                                .percentage-bar-quartely {
                                  height: 1rem;
                                  border-radius: 0.25rem;
                                  --tw-bg-opacity: 1;
                                  background-color: rgb(85 0 195 / var(--tw-bg-opacity));
                                  width: ${calcPercentage(krs.doneGoalsTeamKr, krs.fromQuarterlyGoalsTeamKr)}%;
                                }
                            `}</style>
                    <span className="text-xs">{calcPercentage(krs.doneGoalsTeamKr, krs.fromQuarterlyGoalsTeamKr)}% concluído</span>
                    <span className="text-gray-600 text-sm mt-2">Atual: {krs.doneGoalsTeamKr}</span>
                </div>

                <div className="flex flex-col gap-[2%] mt-4">
                    <h5>Meta Anual:</h5>
                    <div className="flex flex-row">
                        <span className="text-gray-600 text-xs mr-4">De: {krs.toYearlyGoalsTeamKr}</span>
                        <span className="text-gray-600 text-xs ml-4">Para: {krs.fromYearlyGoalsTeamKr}</span>
                    </div>
                    <div className='percentage-container-disclosure w-[90%] mt-2 overflow-hidden'>
                        <div className='percentage-bar-yearly'></div>
                    </div>
                    <style>{`
                                .percentage-bar-yearly {
                                  height: 1rem;
                                  border-radius: 0.25rem;
                                  --tw-bg-opacity: 1;
                                  background-color: rgb(85 0 195 / var(--tw-bg-opacity));
                                  width: ${calcPercentage(krs.doneGoalsTeamKr, krs.fromYearlyGoalsTeamKr)}%;
                                }
                            `}</style>
                    <span className="tetx-xs">{calcPercentage(krs.doneGoalsTeamKr, krs.fromYearlyGoalsTeamKr)}% concluído</span>
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
    )
}

export default TeamKrModal