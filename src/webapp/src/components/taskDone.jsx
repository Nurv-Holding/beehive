import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const TaskDone = ({ openModalTaskDone, name, closeModal, setDescription, taskDone, idTaskUser, done }) => {
    const doneTrue = (event) => {
        event.preventDefault()
        taskDone(idTaskUser)
    }

    return(
        <div>
            <Modal isOpen={openModalTaskDone} closeModal={closeModal}>
                <h4> Colaborador: {name} </h4>
                <form onSubmit={doneTrue} className="flex flex-col gap-3">
                    <textarea onChange={({target}) => setDescription(target.value)} className="input-style min-h-[50px]" name="" id="" cols="30" rows="10"></textarea>
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