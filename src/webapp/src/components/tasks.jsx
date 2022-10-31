import { Link } from 'react-router-dom'

function tasks() {
    return (
        <div className='grid-row grid-general min-h-[525px]'>
        <h1 className='container-title'>Empresas</h1>

        <div>
            <ul className='flex flex-col gap-2'>
                <li className='w-full bg-[#5500C3] p-2 rounded-md text-white text-sm font-medium'>
                    <a className='w-full' href="#">
                        Empresa 1
                    </a>
                </li>
            </ul>
        </div>
      </div>
    )
}

export default tasks