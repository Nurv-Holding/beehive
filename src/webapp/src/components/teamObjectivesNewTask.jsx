import Modal from "./empresasTabPanels/objetivos/components/Modal"
import { useState } from 'react'

function TeamObjectivesNewTask({ message, handleSubmit, modelChange, isOpen, closeModal,openModal, item }) {
    //Modal


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

                    <div className="flex flex-row justify-between">

                        <div className="flex flex-col w-[48%]">
                            <label for="tarefa">Meta Trimestral:</label>
                            <input onChange={modelChange} name='x' type='text' className='input-style' placeholder="Digite a meta trimestral do KR"/>
                        </div>

                        <div className="flex flex-col w-[48%]">
                            <label for="tarefa">Meta Anual:</label>
                            <input onChange={modelChange} name='x' type='text' className='input-style' placeholder="Digite a meta anual do KR"/>
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

export default TeamObjectivesNewTask
