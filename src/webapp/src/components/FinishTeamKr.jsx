import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const FinishTeamKr = ({ message, closeModal, isOpen, krs, setNoteTeamKr, finishGoalTeamKr }) => {
    const finish = (event) => {
        event.preventDefault()
        finishGoalTeamKr(krs.idgoalTeamsKr, krs.idTeam, krs.idProcessGoalsTeams)
    }

    return(
        <div>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div className="flex flex-col gap-4">
                {JSON.stringify(krs)}
                    <h1 className="text-xl">Encerrar o KR: <span className="text-red-500"> {krs?.nameGoalsTeamKr} </span>?</h1>
                    <form onSubmit={finish} className="mt-2 w-full flex flex-col gap-3">
                        <textarea onChange={({ target }) => setNoteTeamKr(target.value)} className="p-2 input-style text-black" name="note" cols="60" rows="3"></textarea>
                        <div>
                            <button className='submit-button' type="submit" >
                                Encerrar
                            </button>

                            <button className='submit-button ml-4' type="button" onClick={closeModal}>
                                Cancelar
                            </button>
                            
                        </div>
                        <span className="text-red-600">
                            {message}
                        </span>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default FinishTeamKr