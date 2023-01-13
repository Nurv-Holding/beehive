import { useNavigate } from 'react-router-dom';
import Header from '../../Header';

function FormUser({ modelChange, message, handleSubmit }) {
    const navigate = useNavigate()

    const routerBack = () => {
        navigate(-1)
    }
    return (
        <>
            <Header />

            <main className='flex flex-col items-center'>
                <div className='flex flex-row w-full justify-center items-center mt-8'>
                    <button onClick={routerBack} className="px-2 rounded-lg bg-white hover:bg-bee-blue-clean hover:text-white hover:cursor-pointer absolute m-2 left-2">voltar</button>
                </div>

                <div>
                    <span className='m-2 text-center justify-self-center text-bee-blue-clean font-bold text-2xl hover:cursor-default'>
                        Cadastrar usuário
                    </span>
                </div>

                <div className='flex flex-col w-2/4 items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center p-4'>
                        <div className='w-[70%] gap-2 flex flex-wrap items-center justify-center'>
                            <input type="text" required className="input-style" placeholder='Nome' onChange={modelChange} />

                            <input type="text" required className="input-style" placeholder='Cargo' onChange={modelChange} />

                            <input type="text" required className="input-style" placeholder='Email' onChange={modelChange} />

                            <input type="password" required className="input-style" placeholder='Senha' onChange={modelChange} />

                            <input type="password" required className="input-style" placeholder='Repita a senha' onChange={modelChange} />
                        </div>

                        <button className='submit-button mt-4' type="submit">Cadastrar</button>
                    </form>
                    <span className={`${message === "Aqui vai uma mensagem" ? 'hidden': 'block text-center'}`}> {message} </span>
                </div>
            </main>
        </>
    )

}

export default FormUser