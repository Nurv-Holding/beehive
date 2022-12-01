import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import Modal from '../Goals/components/Modal'
import { useState } from "react"
import moment from 'moment'

function listaTarefas({ tasks }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='container-table-grid-team'>
        <table class="table-auto w-full">

          <thead>
            <tr>
              <th className='container-title-grid'>KR</th>
              <th className='container-title-grid'>Data Inicial</th>
              <th className='container-title-grid'>Data Final</th>
            </tr>
          </thead>

          <tbody className='text-center'>
            {(tasks || []).map((task) => {
              let [isOpen, setIsOpen] = useState(false)

              function closeModal() {
                  setIsOpen(false)
              }
          
              function openModal() {
                  setIsOpen(true)
              }
              return (
                <>
                  <tr>
                    <td onClick={openModal} className='cursor-pointer'>{task.name}</td>
                    <td>{moment(task.initialDate).format("DD/MM/YY")}</td>
                    <td>{moment(task.finalDate).format("DD/MM/YY")}</td>

                    <Modal isOpen={isOpen} closeModal={closeModal} title={'Adicionar Integrante'}>
                      <form className="mt-2 flex flex-col">
                        <div className='input-and-label-container'>
                          <label for='input-integrantes'>Integrantes</label>
                          <input name='input-integrantes' list='emails' className='input-style' placeholder='Digite os Integrantes' />

                          <datalist id="emails">
                            <option value="Email do Victor">Email do Victor</option>
                          </datalist>
                        </div>
                        <div className="mt-4">
                          <button className='submit-button' type="submit" >
                            Adicionar
                          </button>
                        </div>
                      </form>
                    </Modal>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default listaTarefas