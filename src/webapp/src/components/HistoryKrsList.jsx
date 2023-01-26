import moment from "moment"
import { useState } from "react"
import ObservationModal from "./ObservationModal"

const HistoryKrsList = ({ histories, goalKr, routerBack }) => {
    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }


    return (
        <main className='flex flex-col items-center'>
            <div className='w-11/12'>
                <div className="w-full my-8">
                    <button onClick={routerBack} className="p-3 shadow-md text-xl rounded-full flex justify-center items-center bg-white hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </button>

                    <div className="flex flex-col items-center">
                        <span className=' text-center justify-self-center text-bee-blue-clean font-bold text-2xl hover:cursor-default'>
                            {goalKr.name}
                        </span><span className=' text-center justify-self-center text-bee-blue-clean font-bold text-lg hover:cursor-default'>
                            Criado em: {moment(goalKr?.createdHistory).format("DD/MM/YYYY")}
                        </span>
                    </div>
                </div>

                <div className='container-empresas'>
                    <div className='flex flex-col items-center'>
                        <div className='container-table-grid-team px-4'>
                            <table class="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className='container-title-grid'>Data</th>
                                        <th className='container-title-grid'>Valor inicial</th>
                                        <th className='container-title-grid'>Valor atualizado</th>
                                        <th className='container-title-grid'>Trimestral: {goalKr.fromQuarterly} </th>
                                        <th className='container-title-grid'>Anual: {goalKr.fromYearly} </th>
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
                                                <td>
                                                    <ObservationModal
                                                        history={history?.note}
                                                        isOpen={isOpen}
                                                        closeModal={closeModal}
                                                        openModal={openModal}
                                                    />
                                                </td>
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