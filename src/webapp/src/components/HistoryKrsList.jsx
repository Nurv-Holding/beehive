import moment from "moment"

const HistoryKrsList = ({ histories, goalKr }) => {
    return (
        <main className='flex flex-col items-center'>
            <span className='text-bold text-2xl text-white uppercase mt-8'> {goalKr.name} </span>
            <span className='text-bold text-lg m-2 text-white'>Criado em: {moment(goalKr?.createdHistory).format("DD/MM/YYYY")} </span>
            <div className='w-11/12'>
                <div className='container-empresas'>
                    <div className='flex flex-col items-center'>
                        <div className='container-table-grid-team'>
                            <table class="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className='container-title-grid'>Data</th>
                                        <th className='container-title-grid'>Valor inicial</th>
                                        <th className='container-title-grid'>Valor atualizado</th>
                                        <th className='container-title-grid'>Alvo trimestral: {goalKr.fromQuarterly} </th>
                                        <th className='container-title-grid'>Alvo anual: {goalKr.fromYearly} </th>
                                        <th className='container-title-grid'>Atualizado por</th>
                                        <th className='container-title-grid'>Status</th>
                                        <th className='container-title-grid'>Observação</th>
                                    </tr>
                                </thead>

                                <tbody className='text-center'>
                                    {(histories || []).map((history) => {
                                        return (
                                            <tr>
                                                <td> {moment(history?.updateHistory).format("DD/MM/YYYY")} </td>
                                                <td> {history?.to} </td>
                                                <td> {history?.from} </td>
                                                <td> {history?.quaPercentage}% </td>
                                                <td> {history?.yeaPercentage}% </td>
                                                <td> {history?.user} </td>
                                                <td> {history?.status ? "encerrado" : "ativo"} </td>
                                                <td className="truncate ... max-w-[10px]"> {history?.note} </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HistoryKrsList