import { useNavigate } from 'react-router-dom';
import Header from '../../Header';
import TitleCompany from '../../TitleCompany';

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
                    <button onClick={routerBack} className="px-2 rounded-lg bg-white hover:bg-[#5500C3] hover:text-white hover:cursor-pointer absolute m-2 left-2">voltar</button>
                </div>

                <div className='flex flex-col w-2/4 items-center bg-white p-2 rounded-lg shadow-xl'>
                    <form onSubmit={handleSubmit} className='w-full flex justify-around flex-wrap'>
                        <div className='input-and-label-container'>
                            <label>Nome do usuário</label>
                            <input onChange={modelChange} className='input-style' name="name" type="text" placeholder='Digite o nome do usuário' />
                        </div>

                        <div className='input-and-label-container'>
                            <label>Email</label>
                            <input onChange={modelChange} className='input-style' name="email" type="text" placeholder='Digite o nome do usuário' />
                        </div>

                        <div className='input-and-label-container'>
                            <label>Cargo</label>
                            <input onChange={modelChange} className='input-style' name="occupation" type="text" placeholder='Digite o nome do usuário' />
                        </div>

                        <div className='input-and-label-container'>
                            <label>Senha</label>
                            <input onChange={modelChange} className='input-style' name="password" type="password" placeholder='Digite sua senha' />
                        </div>

                        <div className='input-and-label-container'>
                            <label>Repetir Senha</label>
                            <input onChange={modelChange} className='input-style' name="repeatPassword" type="password" placeholder='Repita sua senha' />
                        </div>
                        <button className='submit-button' type="submit">Cadastrar</button>
                    </form>
                    <span className="text-center"> {message} </span>
                </div>
            </main>
        </>
    )

}

export default FormUser