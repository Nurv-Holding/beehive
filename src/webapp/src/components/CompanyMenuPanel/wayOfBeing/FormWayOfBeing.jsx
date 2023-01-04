import { useNavigate } from 'react-router-dom';
import Header from '../../Header';
import { Tab } from '@headlessui/react'

function FormWayOfBeing({ modelChange, message, handleSubmit }) {
    const navigate = useNavigate()

    const routerBack = () => {
        navigate(-1)
    }
    return (
        <>
            <Header />


            <main className='flex flex-col items-center'>
                <div className='flex flex-row w-full justify-center items-center mt-8'>
                    <button onClick={routerBack} className="px-2 rounded-lg bg-white hover:bg-[#5500C3] hover:text-white hover:cursor-pointer absolute m-2 left-2">voltar</button>
                </div>

                <div>
                    <span className='m-2 text-center justify-self-center text-[#5500C3] font-bold text-2xl hover:cursor-default'>
                        Cadastrar Visão de futuro
                    </span>
                </div>

                <div className='flex flex-col w-2/4 min-h-[300px]  justify-center items-center my-4 bg-white p-2 rounded-lg shadow-xl'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center p-4 gap-4'>
                        <div className='w-[70%] flex flex-col items-center justify-center gap-4'>
                            <input type="text" required className="input-style text-center" placeholder='Título' onChange={modelChange} />

                            <textarea className="p-2 input-style min-h-[50px] text-center" placeholder='Descrição' name="note" onChange={modelChange} cols="60" rows="3"></textarea>
                        </div>

                        <button className='submit-button mt-4' type="submit">Cadastrar</button>
                    </form>
                    <span className="text-center"> {message} </span>
                </div>

            </main>

        </>
    )

}

export default FormWayOfBeing