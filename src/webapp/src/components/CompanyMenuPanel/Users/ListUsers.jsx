import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function ListUsers({ users }) {
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
                {(users || []).map((user) => {
                    return (
                    <>
                      <tr>
                        <td> {user.name} </td>
                        <td> {user.email} </td>
                        <td> {user.occupation} </td>
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

export default ListUsers