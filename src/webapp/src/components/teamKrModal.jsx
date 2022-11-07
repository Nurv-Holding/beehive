import Modal from "./empresasTabPanels/objetivos/components/Modal"

const TeamKrModal = ({
    nameGoalTeam,
    closeModal,  
    openModal,
    isOpen
 }) => {

    return (
        <div className="w-2/4">
            <span onClick={openModal}>
                Metas
            </span>

            <Modal isOpen={isOpen} closeModal={closeModal}>
                <span className="text-lg uppercase mx-2">{nameGoalTeam}</span>
                <span className="text-gray-600 text-xs mx-2">
                    Atualizado em:
                </span>
                <div className="flex flex-col gap-[2%] mt-4">
                    <div className="flex gap-2 items-center">
                        <div>
                            <input type="text" className="input-style" name="done" placeholder="Atualizar os dados" />
                        </div>
                        <button type="button" className="submit-button">OK</button>
                    </div>
                    <div className="flex flex-col gap-[2%] mt-4">
                        <span>Meta Trimestral <span className="text-gray-600 text-xs">xxx</span></span>
                        <div className='percentage-container-disclosure w-[90%] mt-2'>
                            <div className='percentage-bar-disclosure w-[45%]'></div>
                        </div>
                        <span className="text-xs">3% concluído</span>
                        <span className="text-gray-600 text-sm mt-2">Atual: xxx</span>
                    </div>

                    <div className="flex flex-col gap-[2%] mt-4">
                        <span>Meta Anual <span className="text-gray-600 text-xs">xxxx</span></span>
                        <div className='percentage-container-disclosure w-[90%] mt-2'>
                            <div className='percentage-bar-disclosure w-[45%]'></div>
                        </div>
                        <span className="tetx-xs">4% concluído</span>
                        <span className="text-gray-600 text-sm mt-2">Atual: xxx</span>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default TeamKrModal