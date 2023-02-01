import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const UserCloseKr = ({
    isOpen,
    closeModal,
    openModal
}) => {

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
                    <h1 className="text-xl">Encerrar o KR: <span className="text-red-500">Nome do Kr</span>?</h1>
                    <form className="mt-2 w-full flex flex-col gap-3">
                        <textarea className="p-2 input-style min-h-[50px] text-black" name="description" cols="60" rows="3"></textarea>
                        <div>
                            <button className='submit-button' type="submit" >
                                Encerrar
                            </button>

                            <button className='submit-button ml-4' type="button" onClick={closeModal}>
                                Cancelar
                            </button>

                        </div>
                        <span className="text-red-600">
                            {/* <span className={`${message === "Aqui vai uma mensagem" ? 'hidden' : 'block'}`}> {message} </span> */}
                        </span>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default UserCloseKr