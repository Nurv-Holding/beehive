import { useNavigate } from "react-router-dom"
import goalKrsApi from "../api/goalKrsApi"
import goalsApi from "../api/goalsApi"
import Modal from "./CompanyMenuPanel/Goals/components/Modal"
import { useParams, useSearchParams } from 'react-router-dom';
import historyGoalKrApi from "../api/historyGoalKrApi";
import goalTeamsKrsApi from "../api/goalTeamsKrsApi";
import goalsTeamApi from "../api/goalsTeamApi";

const CloseGoal = ({
    nameGoal,
    isOpen,
    closeModal,
    openModal,
    finishGoalTeamKr,
    payload,
    idGoal,
    goalKrs,
    idCompany,
    handleSubmit,
    idGoalKr
}) => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const finishingGoal = async (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        await goalKrs.forEach(async (kr) => {
            if(!kr.status){
                const {data} = await historyGoalKrApi.getAll(idCompany)
                const history = data.length !== 0? data[data.length - 1]: null
                const result = await goalKrsApi.update(kr.idgoalsKr, {status: true})
                const goalKr = result.data
        
                const newData = {
                    idGoal: parseInt(idGoal),
                    idGoalKr: goalKr?.id,
                    user: payload?.name,
                    quaPercentage: history?.quaPercentage || 0,
                    yeaPercentage: history?.yeaPercentage || 0,
                    to: history?.to || 0,
                    from: history?.from || 0,
                    status: !!goalKr?.status,
                    note: `Objetivo encerrado por: ${payload?.name}` 
                  }
        
                await historyGoalKrApi.create(idCompany, newData)
            }

        })

        const result = await goalTeamsKrsApi.getAll(idCompany)
        const krs = result.data
        const {data} = await goalsTeamApi.getKrsByGoal(idCompany, idGoal)

        goalsApi.update(idGoal, {status: true})
        .then(() => {
            krs.forEach(async (kr, i) => {
                const findProcess = data.find(e => e.idGoalTeam === kr.idGoalsTeam && e.idgoalTeamsKr === kr.id)
                if(findProcess){
                    await finishGoalTeamKr(kr.id,findProcess.idTeam, findProcess.idProcessGoalsTeams, `Objetivo encerrado por: ${payload.name}`)
                }
                
            })
            
            navigate({
              pathname: `/company/${idCompany}/goal/${idGoal}`,
              search: `?update=${true}`
            })
    
            closeModal()
          })
          .catch((error) => {
            console.error(error)
          })
    }

    return (
        <div>
            <button className="modal-btn" onClick={openModal}>
                Encerrar objetivo
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal} title={"Encerrar objetivo"}>
                <div className="flex flex-col items-center">
                    <h1>Encerrar o objetivo: <span className="text-red-500 text-2xl">{nameGoal}</span> ?</h1>
                    <form onSubmit={finishingGoal} className="mt-2 flex flex-row w-full justify-center">
                        <button className='submit-button' type="submit" >
                            Encerrar
                        </button>

                        <button className='submit-button ml-4' type="button" onClick={closeModal}>
                            Cancelar
                        </button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default CloseGoal