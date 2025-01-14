import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const AddTask = ({ isOpen, closeModal, modelChange, message, createTask }) => {

    return (
        <>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div>
                    <h5> Objetivo </h5>
                    <form onSubmit={createTask} className="mt-2 flex flex-col">
                        <label for="tarefa">Tarefa:</label>
                        <input onChange={modelChange} name='name' type='text' className='input-style' placeholder="Digite o nome da Tarefa" />

                        <label for="tarefa">Data Final:</label>
                        <input onChange={modelChange} name='finalDate' type='text' className='input-style' placeholder="Informe a data final" />

                        <div className="mt-4">
                            <button className='submit-button' type="submit" >
                                Adicionar
                            </button>
                            <span className={`block`}> {message} </span>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default AddTask