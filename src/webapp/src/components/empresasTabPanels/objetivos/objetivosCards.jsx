import { Link } from "react-router-dom"
import { Fragment, useState } from 'react'
import Modal from "./components/Modal"

function ObjetivosCards({ goals }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div>
            <div className='flex flex-row flex-wrap gap-8 justify-center'>
                {(goals || []).map((goal) => {
                    return (
                        <>
                            <div className='container-card-empresas hover:cursor-pointer'>
                                <span>{goal.name}</span>
                                <button className="modal-btn" onClick={openModal}>
                                    Adicionar Tarefa
                                </button>
                            </div>
                        </>
                    )
                })}

                <Modal isOpen={isOpen} closeModal={closeModal} title={'Adicionar Tarefa'}>
                    <form className="mt-2 flex flex-col">
                        <label for="tarefa">Tarefa:</label>
                        <input name='tarefa' type='text' className='input-style' />

                        <label for="tarefa">Descrição:</label>
                        <input name='Descrição' type='text' className='input-style' />

                        <label>Data Inicial</label>
                        <input className='input-style' type="date" />

                        <label>Data Final</label>
                        <input className='input-style' type="date" />
                    </form>

                    <div className="mt-4">
                        <button className='submit-button' type="submit" onClick={closeModal}>
                            Adicionar
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default ObjetivosCards