import Modal from "./empresasTabPanels/objetivos/components/Modal"

const  AddTeamKr = ( { 
    closeModal,
    message,
    openModal, 
    isOpen,
    item, 
    nameGoalTeam, 
    handleSubmit, 
    modelChange, 
    idGoalTeam } ) => {

    const createGoalTeamKr = (event) => {
        event.preventDefault()

        handleSubmit(idGoalTeam)
    }

    return (
        <>
        <span className='cursor-pointer' onClick={openModal}>Adicionar Krs</span>
        <Modal isOpen={isOpen} closeModal={closeModal}>
            {JSON.stringify(item)}
            <h5> {nameGoalTeam} </h5>
            <form onSubmit={createGoalTeamKr} className="mt-2 flex flex-col">
                <label for="tarefa">KR:</label>
                <input onChange={modelChange} name='name' type='text' className='input-style' placeholder="Digite o nome do KR"/>

                <label for="tarefa">Descrição:</label>
                <input onChange={modelChange} name='descriptions' type='text' className='input-style' placeholder="Digite a descrição do KR"/>

                <div className="flex flex-row justify-between">

                    <div className="flex flex-col w-[48%]">
                        <label for="tarefa">Meta Trimestral:</label>
                        <input onChange={modelChange} name='quarterly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                    </div>

                    <div className="flex flex-col w-[48%]">
                        <label for="tarefa">Meta Anual:</label>
                        <input onChange={modelChange} name='yearly' type='text' className='input-style' placeholder="Digite a meta anual do KR"/>
                    </div>
                </div>


                <div className="mt-4">
                    <button className='submit-button' type="submit" >
                        Adicionar
                    </button>
                    <span> {message} </span>
                </div>
            </form>
         </Modal>
         </>
    )
}

export default AddTeamKr