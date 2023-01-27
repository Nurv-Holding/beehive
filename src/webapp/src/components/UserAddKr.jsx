import Modal from "./CompanyMenuPanel/Goals/components/Modal"

function UserAddKr({ 
    isOpen, 
    closeModal,
    openModal}) {

    return (
        <div>
            <button className="modal-btn" onClick={openModal}>
                Adicionar KR
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal} title={"Adicionar KR"}>
                <h5> Nome do objetivo </h5>
                <form className="mt-2 flex flex-col">
                    <label for="tarefa">KR:</label>
                    <input name='name' type='text' className='input-style' placeholder="Digite o nome do KR"/>

                    <label for="tarefa">Descrição:</label>
                    <input name='descriptions' type='text' className='input-style' placeholder="Digite a descrição do KR"/>

                    <div className="flex flex-col justify-between">

                        <div className="flex flex-col w-[48%]">
                            <label for="tarefa">Meta Trimestral:</label>
                            <div className="flex flex-row">
                                <div>
                                    <label >De:</label>
                                    <input name='toQuarterly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                                <div className="mx-4">
                                    <label >Para:</label>
                                    <input name='fromQuarterly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                            </div>
     
                        </div>

                        <div className="flex flex-col w-[48%]">
                            <label for="tarefa">Meta Anual:</label>
                            <div className="flex flex-row">
                                <div>
                                    <label >De:</label>
                                    <input name='toYearly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                                <div className="mx-4">
                                    <label >Para:</label>
                                    <input name='fromYearly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <button className='submit-button' type="submit" >
                            Adicionar
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default UserAddKr
