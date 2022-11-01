import { Link } from 'react-router-dom'
import Modal from './components/Modal'

function ObjetivosCards({goals}) {
    return (
        <div>
            <div className='flex flex-row flex-wrap gap-8 justify-center'>
                <Modal/>
            </div>
        </div>
    )
}

export default ObjetivosCards