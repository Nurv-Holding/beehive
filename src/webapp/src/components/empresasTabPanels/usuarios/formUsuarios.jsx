import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function formUsuarios() {
    return (
        <div className='flex flex-col'>
            <form className='form-container'>
            <div className='input-and-label-container'>
                <label>Nome do usuário</label>
                <input className='input-style' type="text" placeholder='Digite o nome do usuário'/>
            </div>

            <div className='input-and-label-container'>
                <label>Email</label>
                <input className='input-style' type="text" placeholder='Digite o nome do usuário'/>
            </div>

            <div className='input-and-label-container'>
                <label>Email</label>
                <input className='input-style' type="text" placeholder='Digite o nome do usuário'/>
            </div>

            <div className='input-and-label-container'>
                <label>Senha</label>
                <input className='input-style' type="password" placeholder='Digite sua senha'/>
            </div>

            <div className='input-and-label-container'>
                <label>Repetir Senha</label>
                <input className='input-style' type="password" placeholder='Repita sua senha'/>
            </div>
        </form>

        <button className='submit-button' type="submit">Enviar</button>
        </div>
    )
}

export default formUsuarios