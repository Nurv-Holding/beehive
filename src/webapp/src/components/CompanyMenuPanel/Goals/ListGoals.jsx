import moment from "moment"
import { Link } from "react-router-dom"

function ListGoals({ goals }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='container-table-grid-team'>
        <table class="table-auto w-full">

          <thead>
            <tr>
              <th className='container-title-grid w-[20%]'>Objetivo</th>
              <th className='container-title-grid w-[20%]'>Descrição</th>
              <th className='container-title-grid w-[20%]'>Criado em</th>
              <th className='container-title-grid w-[20%]'>Última atualização</th>
              <th className='container-title-grid w-[20%]'>Status</th>
            </tr>
          </thead>

          <tbody className='text-center'>
            {(goals || []).map((goal) => {
              return (
                <>
                  <tr>
                    <Link to={`goal/${goal.id}`}>
                      <td>{goal.name}</td>
                    </Link>
                    <td>{goal.descriptions}</td>
                    <td>{moment(goal.createdAt).format('DD/MM/YY')}</td>
                    <td>{moment(goal.updatedAt).format('DD/MM/YY')}</td>
                    <td>{`${goal.status? "Encerrado": "Ativo"}`}</td>
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

export default ListGoals