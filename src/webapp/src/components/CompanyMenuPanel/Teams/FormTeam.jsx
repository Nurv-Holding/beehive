import { useNavigate } from 'react-router-dom';
import Header from '../../Header';

function FormTeam({ modelChange, message, handleSubmit }) {
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
                        Cadastrar time
                    </span>
                </div>

                <div className='flex flex-col w-2/4 items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center p-4'>
                        <div className='w-[70%] gap-2 flex flex-wrap items-center justify-center'>
                            <input type="text" required className="input-style" placeholder='Nome' onChange={modelChange} />

                            <input type="text" required className="input-style" placeholder='Descrição' onChange={modelChange} />

                            <select name="user" id="users" className="input-style">
                                <option disabled selected>Líder do time</option>
                                <option> Jefferson Dias </option>
                                <option> Jefferson Noites </option>
                            </select>
                        </div>

                        <button className='submit-button mt-4' type="submit">Cadastrar</button>
                    </form>
                    <span className="text-center"> {message} </span>
                </div>
            </main>
        </>
    )

}

export default FormTeam