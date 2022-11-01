import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function formTimes() {
    return (
        <div className='flex flex-col'>
            <form className='form-container'>
                <div className='input-and-label-container'>
                    <label>Nome do Time</label>
                    <input className='input-style' type="text" placeholder='Digite o nome do time' />
                </div>

                <div className='input-and-label-container'>
                    <label>Descrição</label>
                    <input className='input-style' type="text" placeholder='Digite a descrição do time' />
                </div>

                <div className='input-and-label-container'>
                    <label for='input-integrantes'>Integrantes</label>
                    <input name='input-integrantes' list='emails' className='input-style' placeholder='Digite os Integrantes' />

                    <datalist id="emails">
                        <option value="Email do Victor">Email do Victor</option>
                    </datalist>
                </div>

                <div className='input-and-label-container'>
                    <label>Data Inicial</label>
                    <input className='input-style' type="date" />
                </div>

                <div className='input-and-label-container'>
                    <label>Data Final</label>
                    <input className='input-style' type="date" />
                </div>
            </form>

            <button className='submit-button' type="submit">Enviar</button>
        </div>
    )
}

export default formTimes