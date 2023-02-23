import Modal from "./CompanyMenuPanel/Goals/components/Modal"

function AddKr({  
    handleSubmit, 
    modelChange, 
    isOpen, 
    closeModal,
    item,
    openModal, 
    nameGoal,
    message,
    loading
 }) {

    return (
        <div>
            <button className="modal-btn" onClick={openModal}>
                Adicionar KR
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal} title={"Adicionar KR"}>
                <h5> {nameGoal} </h5>
                <form onSubmit={handleSubmit} className="mt-2 flex flex-col">
                    <label for="tarefa">KR:</label>
                    <input onChange={modelChange} name='name' type='text' className='input-style' placeholder="Digite o nome do KR"/>

                    <label for="tarefa">Descrição:</label>
                    <input onChange={modelChange} name='descriptions' type='text' className='input-style' placeholder="Digite a descrição do KR"/>

                    <div className="flex flex-col justify-between">

                        <div className="flex flex-col w-[48%]">
                            <label for="tarefa">Meta Trimestral:</label>
                            <div className="flex flex-row">
                                <div>
                                    <label >De:</label>
                                    <input onChange={modelChange} name='toQuarterly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                                <div className="mx-4">
                                    <label >Para:</label>
                                    <input onChange={modelChange} name='fromQuarterly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                            </div>
     
                        </div>

                        <div className="flex flex-col w-[48%]">
                            <label for="tarefa">Meta Anual:</label>
                            <div className="flex flex-row">
                                <div>
                                    <label >De:</label>
                                    <input value={item?.toQuarterly} name='toYearly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                                <div className="mx-4">
                                    <label >Para:</label>
                                    <input onChange={modelChange} name='fromYearly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        {!loading?
                        <button className='submit-button' type="submit" >
                            Adicionar
                        </button>
                        :
                        <> <span> Aguarde... </span> </>
                        }

                    </div>
                    <span> {message} </span>
                </form>
            </Modal>
        </div>
    )
}

export default AddKr
