import Modal from "./empresasTabPanels/objetivos/components/Modal"
import { Fragment, useState } from 'react'

function TeamObjectivesPercentage({message, handleSubmit, modelChange, item}) {
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
                Adicionar KR
            </button>

            <Modal isOpen={isOpen} closeModal={closeModal} title={item}>
                <form onSubmit={handleSubmit} className="mt-2 flex flex-col">
                    <label for="tarefa">KR:</label>
                    <input onChange={modelChange} name='name' type='text' className='input-style' />

                    <label for="tarefa">Descrição:</label>
                    <input onChange={modelChange}  name='descriptions' type='text' className='input-style' />

                    <label for="tarefa">Data Inicial:</label>
                    <input onChange={modelChange}  name='initialDate' type='text' className='input-style' />

                    <label for="tarefa">Data Final:</label>
                    <input onChange={modelChange} name='finalDate' type='text' className='input-style' />
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
