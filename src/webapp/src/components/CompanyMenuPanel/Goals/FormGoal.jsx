
function FormGoal({ modelChange, handleSubmit, message }) {
    return (
        <div className='flex flex-col'>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='input-and-label-container'>
                    <label>Objetivo</label>
                    <input className='input-style' onChange={modelChange} name="name" type="text" placeholder='Digite o objetivo' />
                </div>

                <div className='input-and-label-container'>
                    <label>Descrição</label>
                    <input className='input-style' onChange={modelChange} name="descriptions" type="text" placeholder='Digite a descrição do objetivo' />
                </div>

                <button className='submit-button' type="submit">Cadastrar</button>
                <span> {message} </span>
            </form>
        </div>
    )
}

export default FormGoal