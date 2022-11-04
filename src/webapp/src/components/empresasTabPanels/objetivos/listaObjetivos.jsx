import { Link } from "react-router-dom"

function listaObjetivos({ goals }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='container-table-grid-team'>
        <table class="table-auto w-full">

          <thead className="border-b solid border-[#5500C3]">
            <tr>
              <th className='container-title-grid w-[25%]'>Objetivo</th>
              <th className='container-title-grid w-[25%]'>Descrição</th>
              <th className='container-title-grid w-[25%]'>Data Inicial</th>
              <th className='container-title-grid w-[25%]'>Data Final</th>
            </tr>
          </thead>

          <tbody className='text-center'>
            {(goals || []).map((goal) => {
              return (
                <>
                  <tr>
                    <Link to={`/objetivo/${goal.id}`}>
                      <td>{goal.name}</td>
                    </Link>
                    <td>{goal.descriptons}</td>
                    <td>{goal.initialDate}</td>
                    <td>{goal.finalDate}</td>
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