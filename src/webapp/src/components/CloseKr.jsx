import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const CloseKr = ({
    nameKr,
    isOpen,
    closeModal,
    openModal,
    message,
    setNote,
    finishGoalKr,
    idGoalKr
}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        finishGoalKr(idGoalKr)
    }

    return (
        <div>
            <button className="modal-btn h-[30px]" onClick={openModal}>
                Encerrar Kr
            </button>

            <Modal 
            isOpen={isOpen} 
            closeModal={closeModal} 
            title={"Encerrar objetivo"}
            >
                <div className="flex flex-col items-center">
                    <h1>Encerrar o Kr: <span className="text-red-500 text-2xl">{nameKr}</span> ?</h1>
                    <form onSubmit={handleSubmit} className="mt-2 w-full justify-center">
                        <textarea className="p-2" onChange={({ target }) => setNote(target.value)} name="description" cols="60" rows="3"></textarea>
                        <div>
                            <button className='submit-button' type="submit" >
                                Encerrar
                            </button>

                            <button className='submit-button ml-4' type="button" onClick={closeModal}>
                                Cancelar
                            </button>
                            {message}
                        </div>

                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default CloseKr