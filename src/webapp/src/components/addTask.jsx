import Modal from "./empresasTabPanels/objetivos/components/Modal"

const AddTask = ({isOpen, closeModal, modelChange, message, createTask, item}) => {

    return(
        <>
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <h5> Objetivo </h5>
            <form onSubmit={createTask} className="mt-2 flex flex-col">
                <label for="tarefa">Tarefa:</label>
                <input onChange={modelChange} name='name' type='text' className='input-style' placeholder="Digite o nome da Tarefa"/>

                <label for="tarefa">Data Final:</label>
                <input onChange={modelChange} name='finalDate' type='text' className='input-style' placeholder="Informe a data final"/>
                
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

export default AddTask