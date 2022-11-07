
function formTimes({ changeModel, message, handleSubmit, item }) {
    return (
        <div className='flex flex-col'>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='input-and-label-container'>
                    <label>Nome do Time</label>
                    <input onChange={changeModel} className='input-style' name="name" type="text" placeholder='Digite o nome do time' />
                </div>

                <div className='input-and-label-container'>
                    <label>Descrição</label>
                    <input onChange={changeModel} className='input-style' name="descriptions" type="text" placeholder='Digite a descrição do time' />
                </div>

                <button className='submit-button' type="submit">Enviar</button>
                <span> {message} </span>
            </form>
        </div>
    )
}

export default formTimes