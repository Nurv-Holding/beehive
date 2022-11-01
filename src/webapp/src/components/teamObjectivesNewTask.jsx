import Modal from "./empresasTabPanels/objetivos/components/Modal"
import { Fragment, useState } from 'react'

function TeamObjectivesPercentage() {
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
            <button className="modal-btn h-[50px]" onClick={openModal}>
                Adicionar Tarefa
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal} title={'Adicionar Tarefa'}>
                <form className="mt-2 flex flex-col">
                    <label for="tarefa">Tarefa:</label>
                    <input name='name' type='text' className='input-style' />

                    <label for="tarefa">Descrição:</label>
                    <input name='descriptions' type='text' className='input-style' />

                    <label for="tarefa">Data Inicial:</label>
                    <input name='initialDate' type='text' className='input-style' />

                    <label for="tarefa">Data Final:</label>
                    <input name='finalDate' type='text' className='input-style' />
                </form>

                <div className="mt-4">
                    <button className='submit-button' type="submit" onClick={closeModal}>
                        Adicionar
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default TeamObjectivesPercentage
