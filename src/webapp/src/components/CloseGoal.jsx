import { useNavigate } from "react-router-dom"
import goalKrsApi from "../api/goalKrsApi"
import goalsApi from "../api/goalsApi"
import Modal from "./CompanyMenuPanel/Goals/components/Modal"
import { useParams, useSearchParams } from 'react-router-dom';

const CloseGoal = ({
    nameGoal,
    isOpen,
    closeModal,
    openModal,
    idGoal,
    idCompany,
    handleSubmit,
    idGoalKr
}) => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const finishingGoal = (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        goalsApi.update(idGoal, {status: true})
        .then(() => {
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
            <button className="modal-btn h-[40px]" onClick={openModal}>
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