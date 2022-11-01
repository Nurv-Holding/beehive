import { Link } from "react-router-dom"

function listaObjetivos({ goals }) {
    return (
    <div className='flex flex-col items-center'>
      <div className='container-table-grid-team'>
            <table class="table-auto w-full">
              
              <thead>
                <tr>
                  <th className='container-title-grid'>Objetivo</th>
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
                        <td>{goal.name}</td>
                        <td>{goal.descriptons}</td>
                        <td>17/10/2022</td>
                        <td>31/11/2022</td>
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

export default listaObjetivos