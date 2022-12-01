import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function formTarefas() {
    return (
        <div className='flex flex-col'>
            <form className='form-container'>
            <div className='input-and-label-container'>
                <label>KR</label>
                <input className='input-style' type="text" placeholder='Digite o nome do KR'/>
            </div>

            <div className='input-and-label-container'>
                <label>Descrição</label>
                <input className='input-style' type="text" placeholder='Digite a descrição da tarefa'/>
            </div>

            <div className='input-and-label-container'>
                <label>Objetivo</label>
                <input className='input-style' type="text" placeholder='Digite o objetivo'/>
            </div>

            <div className='input-and-label-container'>
                <label>Data Inicial</label>
                <input className='input-style' type="date"/>
            </div>

            <div className='input-and-label-container'>
                <label>Data Final</label>
                <input className='input-style' type="date"/>
            </div>
        </form>

        <button className='submit-button' type="submit">Enviar</button>
        </div>
    )
}

export default formTarefas