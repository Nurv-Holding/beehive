import { useNavigate, useSearchParams } from 'react-router-dom'
import Modal from './CompanyMenuPanel/Goals/components/Modal'
import { useState } from 'react'
import companiesApi from '../api/companiesApi'

function AddCompanies() {  
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
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
    setMessage("")
    setIsOpen(true)
    setLoading(false)
  }

  const changeModel = ({target}) => {
    setCompany((state) => {
      return {...state,[target.name]: target.value}
    })
  }

  const createCompany = async (event) => {
    event.preventDefault()

    setLoading(true)

    searchParams.delete('update')
    setSearchParams(searchParams)

    const result = await companiesApi.getByCnpj(company?.cnpj)
    const verifyCnpj = result.data

    if(company.name === "" || company.cnpj === ""){
      setLoading(false)
      setMessage("Primeiro precisa preencher os campos vazios")

    }else if(verifyCnpj){
      setLoading(false)
      setMessage("Não pode cadastrar empresas com o mesmo cnpj")

    }else{
      companiesApi.create(company)
      .then(() => {
        setMessage("Empresa criado com sucesso")
        navigate({
          pathname: `/`,
          search: `?update=${true}`
        })
  
        setLoading(false)
  
        closeModal()
      })
      .catch((error) => {
        console.error(error)
        setMessage("Algo deu errado!")
        setLoading(false)
      })
    }

  }

    return (
      <div className='bg-white rounded-md shadow-md flex flex-col p-8 min-h-[100px]'>
        <button onClick={openModal} className='w-full bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>Adicionar novas empresas</button>
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <h1 className='text-2xl text-bee-blue-clean'> Adicionar empresa </h1>  
            <form onSubmit={createCompany} className="mt-6 flex flex-col">
                <label for="tarefa">Nome da empresa:</label>
                <input onChange={changeModel} required name='name' type='text' className='input-style' placeholder="Digite o nome da empresa"/>  
                   
                <label className='mt-3' for="tarefa">CNPJ:</label>
                <input onChange={changeModel} required name='cnpj' type='text' className='input-style' placeholder="Digite o CNPJ da empresa"/>        
                
                <div className="mt-4">
                  {!loading?
                  <button className='submit-button' type="submit" >
                    Adicionar
                  </button>
                  :
                  <> <span> Aguarde... </span> </>
                  }

                    <span> {message} </span>
                </div>
            </form>
         </Modal>
      </div>
    )
}

export default AddCompanies