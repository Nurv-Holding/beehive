import Modal from "../objetivos/components/Modal"
import AddIntegrantes from "./components/AddIntegrante"
import { Fragment, useState } from 'react'

function TimesCards({ teams }) {
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
                <div className='container-card-empresas hover:cursor-pointer' onClick={openModal}>
                    <span>Nome do Time</span>
                </div>

                <Modal isOpen={isOpen} closeModal={closeModal} title={'Nome do time'}>

                    <span className="mt-8">Descrição</span>
                    <div className="description-container">
                        <p>Descrição</p>
                    </div>


                    <span className="mt-8">Integrantes</span>
                    <div className="flex flex-row gap-4 mt-2">
                        <AddIntegrantes />
                    </div>

                    <div className="checkbox-container mt-2">
                        <div>
                            <span>LISTA DE USUARIOS AQUI</span>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default TimesCards