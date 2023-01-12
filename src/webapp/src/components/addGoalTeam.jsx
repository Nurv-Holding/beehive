import NewModal from "./CompanyMenuPanel/Goals/components/NewModal"

function AddGoalTeam({ idRef, createGoalsTeam, modelChange, idTeam }) {

    const goalTealSubmit = (event) => {
        event.preventDefault()

        console.log("AddGoalTeam idTeam", idTeam)

        createGoalsTeam(idTeam)
    }

    return (
        <>
            <NewModal idRef={idRef}>
                <div className="p-8 flex flex-col justify-center items-center gap-4">
                    <h1 className="text-center uppercase text-bee-strong-1 font-bold text-3xl"> Nome do Time </h1>
                    <span className="text-bee-blue-clean text-lg font-bold">Adicionar Objetivo</span>

                    <form onSubmit={goalTealSubmit} className="mt-2 flex flex-col w-full">

                        <label for="tarefa">Objetivo:</label>
                        <input onChange={modelChange} name='name' type='text' className='input-style w-full' placeholder="Digite o nome do objetivo" />

                        <label for="tarefa">Descrição:</label>
                        <input onChange={modelChange} name='descriptions' type='text' className='input-style' placeholder="Digite a descrição do objetivo" />

                        <div className="mt-4">
                            <button className='submit-button' type="submit" >
                                Adicionar
                            </button>
                        </div>
                    </form>
                </div>
            </NewModal>
        </>
    )
}

export default AddGoalTeam