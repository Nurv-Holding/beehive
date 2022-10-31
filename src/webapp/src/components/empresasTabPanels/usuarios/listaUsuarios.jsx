import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function listaUsuarios({ goals }) {
    return (
        <div className='flex flex-col items-center'>
    <div className='container-table-grid-team'>
            <table class="table-auto w-full">
              
              <thead>
                <tr>
                  <th className='container-title-grid'>Nome</th>
                  <th className='container-title-grid'>Email</th>
                  <th className='container-title-grid'>Cargo</th>
                </tr>
              </thead>

              <tbody className='text-center'>
                {(goals || []).map((goal) => {
                    return (
                    <>
                      <tr>
                        <td>Nome</td>
                        <td>Email</td>
                        <td>Cargo</td>
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

export default listaUsuarios