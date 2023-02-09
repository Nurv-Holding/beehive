import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const  AddTeamKr = ( { 
    closeModal,
    message,
    isOpen, 
    nameGoalTeam,
    item,
    modelChange, 
    handleSubmit } ) => {

    return (
        <>
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <h5> {nameGoalTeam} </h5>
            <form onSubmit={handleSubmit} className="mt-2 flex flex-col">
                <label for="tarefa">KR:</label>
                <input onChange={modelChange} name='name' type='text' className='input-style' placeholder="Digite o nome do KR"/>

                <label for="tarefa">Descrição:</label>
                <input onChange={modelChange} name='descriptions' type='text' className='input-style' placeholder="Digite a descrição do KR"/>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-[48%] mt-2">
                        <label for="tarefa">Meta Trimestral:</label>
                        <div className="flex flex-col gap-2 w-2/4">
                            <div>
                                <label >De:</label>
                                <input onChange={modelChange} name='toQuarterly' type='text' className='input-style' placeholder="Digite a meta trimestral"/>
                            </div>
                            <div>
                                <label >Para:</label>
                                <input onChange={modelChange} name='fromQuarterly' type='text' className='input-style' placeholder="Digite a meta trimestral"/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-[48%] mt-2">
                        <label for="tarefa">Meta Anual:</label>
                        <div className="flex flex-col gap-2 w-2/4">
                            <div>
                                <label >De:</label>
                                <input value={item?.toQuarterly} name='toYearly' type='text' className='input-style' placeholder="Digite a meta trimestral"/>
                            </div>
                            <div>
                                <label >Para:</label>
                                <input onChange={modelChange} name='fromYearly' type='text' className='input-style' placeholder="Digite a meta trimestral"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-4">
                    <button className='submit-button' type="submit" >
                        Adicionar
                    </button>
                    <span className={`${message === "Aqui vai uma mensagem" ? 'hidden': 'block'}`}> {message} </span>
                </div>
            </form>
         </Modal>
         </>
    )
}

export default AddTeamKr
