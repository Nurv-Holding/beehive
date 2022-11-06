import Modal from "./empresasTabPanels/objetivos/components/Modal"

function AddGoalTeam( { closeModal, openModal, isOpen, createGoalsTeam, modelChange, idTeam } ) {

    const goalTealSubmit = (event) => {
        event.preventDefault()

        createGoalsTeam(idTeam)
    }

    return (
        <div className="w-[20%]">
            <button className="modal-btn h-[60px]" onClick={openModal}>
                Adicionar objetivo
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal} title={"Adicionar KR"}>
                <h5> Nome do time </h5>
                <form onSubmit={goalTealSubmit} className="mt-2 flex flex-col">

                    <label for="tarefa">Objetivo do Time:</label>
                    <input onChange={modelChange} name='name' type='text' className='input-style' placeholder="Digite o nome do objetivo" />

                    <label for="tarefa">Descrição:</label>
                    <input onChange={modelChange} name='descriptions' type='text' className='input-style' placeholder="Digite a descrição do objetivo" />

                    <div className="mt-4">
                        <button className='submit-button' type="submit" >
                            Adicionar
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddGoalTeam