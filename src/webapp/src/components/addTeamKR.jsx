import Modal from "./empresasTabPanels/objetivos/components/Modal"
import { useState } from 'react';

function AddTeamKR() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className="w-[20%]">
            <button className="modal-btn h-[30px]" onClick={openModal}>
                Adicionar KR
            </button>

            <Modal closeModal={closeModal} title={"Adicionar KR"}>
                <h5> Nome do time </h5>
                <form className="mt-2 flex flex-col">
                    <select className="input-style">
                        <option disabled selected>Vinculado ao objetivo:</option>
                        <option>Faturamento</option>
                        <option>Faturamento 2</option>
                        <option>Faturamento 3</option>
                    </select>

                    <label for="tarefa">KR:</label>
                    <input name='name' type='text' className='input-style' placeholder="Digite o nome do KR" />

                    <label for="tarefa">Descrição:</label>
                    <input name='descriptions' type='text' className='input-style' placeholder="Digite a descrição do KR" />

                    <div className="flex flex-row justify-between">

                        <div className="flex flex-col w-[48%]">
                            <label for="tarefa">Meta Trimestral:</label>
                            <input name='quarterly' type='text' className='input-style' placeholder="Digite a meta trimestral do KR" />
                        </div>

                        <div className="flex flex-col w-[48%]">
                            <label for="tarefa">Meta Anual:</label>
                            <input name='yearly' type='text' className='input-style' placeholder="Digite a meta anual do KR" />
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

export default AddTeamKR