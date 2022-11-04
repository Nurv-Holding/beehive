import Modal from "./empresasTabPanels/objetivos/components/Modal"
import { Fragment, useState } from 'react'

function TeamObjectivesPercentage({ message, handleSubmit, modelChange, item }) {
    //Modal
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className='container-percentage-okr flex flex-col items-center justify-center'>
            <button className="modal-btn h-[40px]" onClick={openModal}>
                Adicionar KR
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal} title={"Adicionar KR"}>
                <form onSubmit={handleSubmit} className="mt-2 flex flex-col">
                    <label for="tarefa">KR:</label>
                    <input onChange={modelChange} name='name' type='text' className='input-style' placeholder="Digite o nome do KR"/>

                    <label for="tarefa">Descrição:</label>
                    <input onChange={modelChange} name='descriptions' type='text' className='input-style' placeholder="Digite a descrição do KR"/>

                    <div className="flex flex-row">
                        <div className="flex flex-col w-[48%]">
                            <label for="tarefa">Data Inicial:</label>
                            <input onChange={modelChange} name='initialDate' type='text' className='input-style' placeholder="Digite a data inicial"/>
                        </div>

                        <div className="flex flex-col w-[48%] ml-[2%]">
                            <label for="tarefa">Data Final:</label>
                            <input onChange={modelChange} name='finalDate' type='text' className='input-style' placeholder="Digite a data final"/>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="flex flex-col w-[32%]">
                            <label for="tarefa">Métrica:</label>
                            <input onChange={modelChange} name='x' type='text' className='input-style' placeholder="Digite a métrica do KR"/>
                        </div>

                        <div className="flex flex-col w-[32%] mx-[2%]">
                            <label for="tarefa">Métrica Tri:</label>
                            <input onChange={modelChange} name='x' type='text' className='input-style' placeholder="Digite a métrica trimestral do KR"/>
                        </div>

                        <div className="flex flex-col w-[32%]">
                            <label for="tarefa">Métrica Ano:</label>
                            <input onChange={modelChange} name='x' type='text' className='input-style' placeholder="Digite a métrica anual do KR"/>
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

export default TeamObjectivesPercentage
