import {  useNavigate, useSearchParams } from 'react-router-dom'
import Modal from './CompanyMenuPanel/Goals/components/Modal'
import { useState } from 'react'
import companiesApi from '../api/companiesApi'

function AddCompanies() {  
  let [isOpen, setIsOpen] = useState(false)
  const [company, setCompany] = useState({
    name:"",
    cnpj:""
  })
  const [message, setMessage] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const changeModel = ({target}) => {
    setCompany((state) => {
      return {...state,[target.name]: target.value}
    })
  }

  const createCompany = async (event) => {
    event.preventDefault()

    searchParams.delete('update')
    setSearchParams(searchParams)

    companiesApi.create(company)
    .then(() => {
      setMessage("Empresa criado com sucesso")
      navigate({
        pathname: `/`,
        search: `?update=${true}`
      })

      closeModal()
    })
    .catch((error) => {
      console.error(error)
      setMessage("Algo deu errado!")
    })
  }

    return (
      <div className='grid-row grid-general min-h-[100px]'>
        <button onClick={openModal} className='w-full bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>Adicionar novas empresas</button>
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <h5> Adicionar empresa </h5>  
            <form onSubmit={createCompany} className="mt-6 flex flex-col">
                <label for="tarefa">Nome da empresa:</label>
                <input onChange={changeModel} name='name' type='text' className='input-style' placeholder="Digite o nome da empresa"/>  
                   
                <label className='mt-3' for="tarefa">CNPJ:</label>
                <input onChange={changeModel}  name='cnpj' type='text' className='input-style' placeholder="Digite o CNPJ da empresa"/>        
                
                <div className="mt-4">
                    <button className='submit-button' type="submit" >
                        Adicionar
                    </button>
                    <span> {message} </span>
                </div>
            </form>
         </Modal>
      </div>
    )
}

export default AddCompanies