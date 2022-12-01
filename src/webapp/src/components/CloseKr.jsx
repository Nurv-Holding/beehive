import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const CloseKr = ({
    nameKr,
    isOpen,
    closeModal,
    openModal,
    handleSubmit
}) => {

    return (
        <div>
            <button className="modal-btn h-[30px] mt-2" onClick={openModal}>
                Encerrar Kr
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal} title={"Encerrar objetivo"}>
                <div className="flex flex-col items-center">
                    <h1>Encerrar o Kr: <span className="text-red-500 text-2xl">{nameKr}</span> ?</h1>
                    <form onSubmit={handleSubmit} className="mt-2 flex flex-row w-full justify-center">
                        <button className='submit-button' type="submit" >
                            Encerrar
                        </button>

                        <button className='submit-button ml-4' type="button" onClick={closeModal}>
                            Cancelar
                        </button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default CloseKr