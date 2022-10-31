import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function listaTimes({ goals }) {
    return (
        <div className='flex flex-col items-center'>
    <div className='container-table-grid-team'>
            <table class="table-auto w-full">
              
              <thead>
                <tr>
                  <th className='container-title-grid'>Time</th>
                  <th className='container-title-grid'>Descrição</th>
                  <th className='container-title-grid'>Data Inicial</th>
                  <th className='container-title-grid'>Data Final</th>
                </tr>
              </thead>

              <tbody className='text-center'>
                {(goals || []).map((goal) => {
                    return (
                    <>
                      <tr>
                        <td>Time</td>
                        <td>Descrição</td>
                        <td>Data Inicial</td>
                        <td>Data Final</td>
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

export default listaTimes