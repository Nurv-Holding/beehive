import Modal from "./CompanyMenuPanel/Goals/components/Modal"

function TeamObservationModal({
    history,
    isOpen,
    closeModal,
    openModal }) {

    return (
        <div>
            <p className="max-w-[125px] max-h-[25px] overflow-hidden cursor-pointer" onClick={openModal}>
                {history}
            </p>

            <Modal isOpen={isOpen} closeModal={closeModal} title={"Adicionar KR"}>
                <div>
                    <div className="min-h-[150px] input-style text-center">
                        <p> {history} </p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default TeamObservationModal
