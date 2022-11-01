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
                    <span>{team.name}</span>
                </div>

                <Modal isOpen={isOpen} closeModal={closeModal} title={'Nome do time'}>
                    <span className="text-xs text-gray-500">Objetivo</span>

                    <span className="mt-4">Descrição</span>
                    <div className="description-container">
                        <p>Descrição</p>
                    </div>


                    <span className="mt-4">Integrantes</span>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <span className="text-sm text-gray-500">50%</span>
                        <div className="container-percentage-checklist">
                            <div className="container-bar-checklist w-[50%]"></div>
                        </div>
                        <AddIntegrantes />
                    </div>

                    <div className="checkbox-container">
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