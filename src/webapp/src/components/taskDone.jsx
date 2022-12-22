import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const TaskDone = ({ openModalTaskDone, setOpenModalTaskDone, closeModal, setDescription, taskDone, idTaskUser, done }) => {
    const doneTrue = (event) => {
        event.preventDefault()
        taskDone(idTaskUser)
    }

    return(
        <div>
            {!done &&
                <button onClick={() => setOpenModalTaskDone(true)}> Concluir </button>
            }
            <Modal isOpen={openModalTaskDone} closeModal={closeModal}>
                <form onSubmit={doneTrue} className="flex flex-col gap-3">
                    <textarea onChange={({target}) => setDescription(target.value)} className="input-style" name="" id="" cols="30" rows="10"></textarea>
                    <div>
                        <button className='submit-button' type="submit" >
                            OK
                        </button>
                        <button className='submit-button ml-4' type="button" onClick={closeModal}>
                            Cancelar
                        </button>
                            
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default TaskDone