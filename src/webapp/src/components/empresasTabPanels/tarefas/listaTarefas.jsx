import moment from 'moment'

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
                </tr>
              </thead>

              <tbody className='text-center'>
                {(tasks || []).map((task) => {
                    return (
                    <>
                      <tr>
                        <td>{task.name}</td>
                        <td>{moment(task.initialDate).format("DD/MM/YY")}</td>
                        <td>{moment(task.finalDate).format("DD/MM/YY")}</td>
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