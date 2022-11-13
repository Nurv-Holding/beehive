import { Link } from 'react-router-dom'
import Modal from './empresasTabPanels/objetivos/components/Modal'
import { useState } from 'react'

function AddEmpresa() {  
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

    return (
      <div className='grid-row grid-general min-h-[100px]'>
        <button onClick={openModal} className='w-full bg-[#5500C3] p-2 rounded-md text-white text-sm font-medium'>Adicionar novas empresas</button>
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <h5> Adicionar empresa </h5>  
            <form className="mt-6 flex flex-col">
                <label for="tarefa">Nome da empresa:</label>
                <input name='name' type='text' className='input-style' placeholder="Digite o nome da empresa"/>  
                   
            <label className='mt-3' for="tarefa">CNPJ:</label>
                <input name='descriptions' type='text' className='input-style' placeholder="Digite o CNPJ da empresa"/>        

            <div className="mt-4">
                    <button className='submit-button' type="submit" >
                        Adicionar
                    </button>
                    <span> Mensagem aqui </span>
                </div>
            </form>
         </Modal>
      </div>
    )
}

export default AddEmpresa