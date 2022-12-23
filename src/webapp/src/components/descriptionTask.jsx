import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const DescriptionTask = ({ openDescriptionModal, closeDescriptionModal,task }) => {
    return(
        <div>
            <Modal isOpen={openDescriptionModal} closeModal={closeDescriptionModal}>
                <div>
                    <div className="min-h-[150px] input-style ">
                        <h4 className="text-center"> Colaborador: {task?.nameUser} </h4>
                        <p> {task?.description} </p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DescriptionTask