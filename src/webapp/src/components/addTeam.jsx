import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const AddTeam = ({ 
    message,
    addTeamInGoal, 
    modelChange, 
    isOpen, 
    closeModal,
    openModal,
    loading,
    teams }) => {

    return (
        <div>
            <button className="modal-btn" onClick={openModal}>
                Adicionar Time
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal} title={"Adicionar KR"}>
                <form onSubmit={addTeamInGoal} className="mt-2 flex flex-col">
                    <select onChange={modelChange} name="team" id="teams" className="input-style">
                        <option disabled selected>Selecionar time</option>
                        {(teams || []).map((team) => {
                            return(
                                <option key={team.id} value={team.id}> {team.name} </option>
                            )
                        })}
                        
                    </select>
                    <div className="mt-4">
                    {!loading?
                        <button className='submit-button' type="submit" >
                            Adicionar
                        </button>
                        :
                        <> <span> Aguarde... </span> </>
                        }
                        <span className={`text-center`}> {message} </span>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddTeam