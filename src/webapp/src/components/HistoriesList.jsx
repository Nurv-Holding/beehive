

const HistoriesList = () => {
    return(
        <main className='flex flex-col items-center'>
            <span className='text-bold text-xl text-white uppercase m-2'>Nome do Kr</span>
            <span className='text-bold text-lg m-2 text-white'>Criado em</span>
            <div className='w-11/12'>
                <div className='container-empresas'>
                    <div className='flex flex-col items-center'>
                        <div className='container-table-grid-team'>
                            <table class="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className='container-title-grid'>Valor inicial</th>
                                        <th className='container-title-grid'>Valor atualizado</th>
                                        <th className='container-title-grid'>Atualizado em</th>
                                        <th className='container-title-grid'>Atualizado por</th>
                                        <th className='container-title-grid'>Status</th>
                                    </tr>
                                </thead>

                                <tbody className='text-center'>
                                    <tr>
                                        <td> x </td>
                                        <td> x2 </td>
                                        <td> data atualização </td>
                                        <td> Atualizador </td>
                                        <td> Concluído </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HistoriesList