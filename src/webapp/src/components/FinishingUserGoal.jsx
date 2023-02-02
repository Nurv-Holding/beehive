import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const FinishingUserGoal = ({
    isOpen,
    closeModal,
    openModal
}) => {

    return (
        <div>
            <button className="modal-btn" onClick={openModal}>
                Encerrar objetivo
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal} title={"Encerrar objetivo"}>
                <div className="flex flex-col items-center">
                    <h1>Encerrar o objetivo: <span className="text-red-500 text-2xl">Nome do Objetivo</span> ?</h1>
                    <form className="mt-2 flex flex-row w-full justify-center">
                        <button className='submit-button' type="submit" >
                            Encerrar
                        </button>

                        <button onClick={closeModal} className='submit-button ml-4' type="button">
                            Cancelar
                        </button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default FinishingUserGoal