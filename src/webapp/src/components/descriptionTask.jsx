import Modal from "./CompanyMenuPanel/Goals/components/Modal"


const DescriptionTask = ({ openDescriptionModal, closeDescriptionModal, setOpenDescriptionModal,task }) => {
    return(
        <div>
            <button onClick={() => setOpenDescriptionModal(true)} > Lições Aprendidas </button>
            <Modal isOpen={openDescriptionModal} closeModal={closeDescriptionModal}>
                <div>
                    <div className="min-h-[150px] input-style ">
                        <h4 className="text-center"> Autor: {task.nameUser} </h4>
                        <p> {task.description} </p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DescriptionTask