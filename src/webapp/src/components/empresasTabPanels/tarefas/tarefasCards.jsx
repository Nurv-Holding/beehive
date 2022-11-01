import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import Modal from './components/Modal'

function TarefasCards() {
    return (
        <div className='flex flex-row flex-wrap gap-8 justify-center'>
            <Modal/>
        </div>
    )
}

export default TarefasCards