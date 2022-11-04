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
                {JSON.stringify(item)}
                <form onSubmit={handleSubmit} className="mt-2 flex flex-col">
                    <label for="tarefa">KR:</label>
                    <input onChange={modelChange} name='name' type='text' className='input-style' placeholder="Digite o nome do KR"/>

                    <label for="tarefa">Descrição:</label>
                    <input onChange={modelChange} name='descriptions' type='text' className='input-style' placeholder="Digite a descrição do KR"/>

                    <div className="flex flex-row">

                        <div className="flex flex-col w-[32%] mx-[2%]">
                            <label for="tarefa">Meta Tri:</label>
                            <input onChange={modelChange} name='quarterly' type='text' className='input-style' placeholder="Digite a métrica trimestral do KR"/>
                        </div>

                        <div className="flex flex-col w-[32%]">
                            <label for="tarefa">Meta Ano:</label>
                            <input onChange={modelChange} name='yearly' type='text' className='input-style' placeholder="Digite a métrica anual do KR"/>
                        </div>
                    </div>


                    <div className="mt-4">
                        <button className='submit-button' type="submit" >
                            Adicionar
                        </button>
                    </div>
                    <span> {message} </span>
                </form>
            </Modal>
        </div>
    )
}

export default TeamObjectivesNewTask
