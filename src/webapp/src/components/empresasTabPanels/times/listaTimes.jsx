import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function listaTimes({ teams }) {
    return (
        <div className='flex flex-col items-center'>
    <div className='container-table-grid-team'>
            <table class="table-auto w-full">
              
              <thead>
                <tr>
                  <th className='container-title-grid'>Time</th>
                  <th className='container-title-grid'>Descrição</th>
                  <th className='container-title-grid'>Data de criação</th>
                </tr>
              </thead>

              <tbody className='text-center'>
                {(teams || []).map((team) => {
                    return (
                    <>
                      <tr>
                        <td> {team.name} </td>
                        <td> {team.descriptions} </td>
                        <td>{team.createdAt}</td>
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