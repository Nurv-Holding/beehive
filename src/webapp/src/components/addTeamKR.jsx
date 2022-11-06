import Modal from "./empresasTabPanels/objetivos/components/Modal"

const  AddTeamKr = ( { closeModal, openModal, isOpen } ) => {

    return (
        <>
        <span className='cursor-pointer' onClick={openModal}>Metas</span>
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <span className="text-lg uppercase mx-2">Aumentar número de clientes</span>
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
                    <span>Meta Trimestral <span className="text-gray-600 text-xs"></span></span>
                    <div className='percentage-container-disclosure w-[90%] mt-2'>
                        <div className='percentage-bar-disclosure w-[45%]'></div>
                    </div>
                    <span className="text-xs">% concluído</span>
                    <span className="text-gray-600 text-sm mt-2">Atual:</span>
                </div>

                <div className="flex flex-col gap-[2%] mt-4">
                    <span>Meta Anual <span className="text-gray-600 text-xs"></span></span>
                    <div className='percentage-container-disclosure w-[90%] mt-2'>
                        <div className='percentage-bar-disclosure w-[45%]'></div>
                    </div>
                    <span className="tetx-xs">% concluído</span>
                    <span className="text-gray-600 text-sm mt-2">Atual: </span>
                </div>
            </div>
         </Modal>
         </>
    )
}

export default AddTeamKr