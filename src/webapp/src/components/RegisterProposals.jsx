

const RegisterProposals = ({handleSubmit, message, modelChange}) => {
    return(
        <>
        <div>
            <span className='m-2 text-center justify-self-center text-[#5500C3] font-bold text-2xl hover:cursor-default'>
                Cadastrar Proposito
            </span>
        </div>

        <div className='flex flex-col w-2/4 min-h-[300px] justify-center items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col items-center p-4 gap-4'>
                <div className='w-[70%] flex flex-col items-center justify-center gap-4'>
                    <input type="text" required className="input-style text-center" placeholder='Título' name="title" onChange={modelChange} />

                    <textarea className="p-2 input-style min-h-[25px] text-center" placeholder='Descrição' name="description" onChange={modelChange} cols="50" rows="3"></textarea>
                </div>

                <button className='submit-button mt-4' type="submit">Cadastrar</button>
            </form>
        <span className="text-center"> {message} </span>
        </div>
        </>
    )
}

export default RegisterProposals