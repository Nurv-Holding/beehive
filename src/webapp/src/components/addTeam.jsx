import Modal from "./empresasTabPanels/objetivos/components/Modal"

const AddTeam = ({ 
    message,
    addTeamInGoal, 
    item, 
    modelChange, 
    isOpen, 
    closeModal,
    openModal,
    teams }) => {

    return (
        <div className='container-percentage-okr flex flex-col items-center justify-center'>
            <button className="modal-btn h-[40px]" onClick={openModal}>
                Adicionar Time
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal} title={"Adicionar KR"}>
                <form onSubmit={addTeamInGoal} className="mt-2 flex flex-col">
                    {JSON.stringify(item)}
                    <select onChange={modelChange} name="team" id="teams">
                        <option disabled selected >Selecionar time</option>
                        {(teams || []).map((team) => {
                            return(
                                <option key={team.id} value={team.id}> {team.name} </option>
                            )
                        })}
                        
                    </select>
                    <div className="mt-4">
                        <button className='submit-button' type="submit" >
                            Adicionar
                        </button>
                        <span> {message} </span>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddTeam