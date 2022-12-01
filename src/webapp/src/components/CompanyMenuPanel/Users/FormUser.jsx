
function FormUser({ modelChange, message, handleSubmit }) {
    return (
        <div className='flex flex-col'>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='input-and-label-container'>
                    <label>Nome do usuário</label>
                    <input onChange={modelChange} className='input-style' name="name" type="text" placeholder='Digite o nome do usuário'/>
                </div>

                <div className='input-and-label-container'>
                    <label>Email</label>
                    <input onChange={modelChange} className='input-style' name="email" type="text" placeholder='Digite o nome do usuário'/>
                </div>

                <div className='input-and-label-container'>
                    <label>Cargo</label>
                    <input onChange={modelChange} className='input-style' name="occupation" type="text" placeholder='Digite o nome do usuário'/>
                </div>

                <div className='input-and-label-container'>
                    <label>Senha</label>
                    <input onChange={modelChange} className='input-style' name="password" type="password" placeholder='Digite sua senha'/>
                </div>

                <div className='input-and-label-container'>
                    <label>Repetir Senha</label>
                    <input onChange={modelChange} className='input-style' name="repeatPassword" type="password" placeholder='Repita sua senha'/>
                </div>
                <button className='submit-button' type="submit">Enviar</button>
            </form>
        <span className="text-center"> {message} </span>
        </div>
    )
}

export default FormUser