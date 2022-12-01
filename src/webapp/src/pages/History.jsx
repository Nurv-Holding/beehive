import Header from '../components/header';


function History() {
    return (
        <>
            <Header />

            <main className='flex flex-col items-center'>
                <div className='w-11/12'>
                    <div className='container-empresas'>
                        <div className='flex flex-col items-center'>
                            <div className='container-table-grid-team'>
                                <table class="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className='container-title-grid'>Kr</th>
                                            <th className='container-title-grid'>Valor inicial</th>
                                            <th className='container-title-grid'>Valor atualizado</th>
                                            <th className='container-title-grid'>Data de criação</th>
                                            <th className='container-title-grid'>Atualizado em</th>
                                            <th className='container-title-grid'>Atualizado por</th>
                                        </tr>
                                    </thead>

                                    <tbody className='text-center'>
                                        <tr>
                                            <td> Nome do Kr </td>
                                            <td> x </td>
                                            <td> x2 </td>
                                            <td> data criação </td>
                                            <td> data atualização </td>
                                            <td> Atualizador </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default History;