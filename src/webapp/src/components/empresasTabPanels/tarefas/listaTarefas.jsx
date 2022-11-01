import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function listaTarefas({ tasks }) {
    return (
        <div className='flex flex-col items-center'>
          <div className='container-table-grid-team'>
            <table class="table-auto w-full">
              
              <thead>
                <tr>
                  <th className='container-title-grid'>Tarefa</th>
                  <th className='container-title-grid'>Data Inicial</th>
                  <th className='container-title-grid'>Data Final</th>
                  <th className='container-title-grid'>Time</th>
                </tr>
              </thead>

              <tbody className='text-center'>
                {(tasks || []).map((task) => {
                    return (
                    <>
                      <tr>
                        <td>{task.name}</td>
                        <td>Data Inicial</td>
                        <td>Data Final</td>
                        <td>Nome do time</td>
                      </tr>
                    </>
                     )
                    })}
              </tbody>
            </table>
          </div>
    </div>
    )
}

export default listaTarefas