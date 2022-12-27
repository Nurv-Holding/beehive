import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const CloseKr = ({
    nameKr,
    isOpen,
    closeModal,
    openModal,
    message,
    note,
    setNote,
    finishGoalKr,
    idGoalKr
}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        finishGoalKr(idGoalKr, note)
    }

    return (
        <div>
            <button className="modal-btn h-[30px]" onClick={openModal}>
                Encerrar KR
            </button>

            <Modal 
            isOpen={isOpen} 
            closeModal={closeModal} 
            title={"Encerrar objetivo"}
            >
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl">Encerrar o KR: <span className="text-red-500">{nameKr}</span>?</h1>
                    <form onSubmit={handleSubmit} className="mt-2 w-full flex flex-col gap-3">
                        <textarea className="p-2 input-style min-h-[50px] text-black" onChange={({ target }) => setNote(target.value)} name="description" cols="60" rows="3"></textarea>
                        <div>
                            <button className='submit-button' type="submit" >
                                Encerrar
                            </button>

                            <button className='submit-button ml-4' type="button" onClick={closeModal}>
                                Cancelar
                            </button>
                            
                        </div>
                        <span className="text-red-600">
                            {message}
                        </span>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default CloseKr