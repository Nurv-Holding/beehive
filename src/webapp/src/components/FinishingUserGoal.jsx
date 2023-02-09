import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const FinishingUserGoal = ({
    isOpen,
    closeModal,
    item,
    finishingGoal
}) => {

    return (
        <div>

            <Modal isOpen={isOpen} closeModal={closeModal} title={"Encerrar objetivo"}>
                <div className="flex flex-col items-center">
                    <h1>Encerrar o objetivo: <span className="text-red-500 text-2xl"> {item?.name} </span> ?</h1>
                    <form onSubmit={finishingGoal} className="mt-2 flex flex-row w-full justify-center">
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