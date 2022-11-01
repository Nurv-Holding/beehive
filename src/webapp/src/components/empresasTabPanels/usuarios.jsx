import { Link, useParams } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import FormUsuarios from './usuarios/formUsuarios'
import ListaUsuarios from './usuarios/listaUsuarios'
import { useContext } from 'react'
import { ContextUser } from '../../context/ContextUser'
import { useState } from 'react'
import usersApi from '../../api/usersApi'

function Usuarios() {
    const {users} = useContext(ContextUser)
    const {item} = useContext(ContextUser)
    const {modelChange} = useContext(ContextUser)
    const [message, setMessage] = useState("Aqui vai uma mensagem")
    const {idCompany} = useParams()

    const handleSubmit = async (event) => {
        event.preventDefault()

        console.log("item", item)

        if(Object.keys(item).length === 0 && 
        item.name === "" || item.email === "" || 
        item.occupation === "" || item.password === "" || 
        item.repeatPassword === ""){
            setMessage("Precisa preencher os campos vazios")

        }else if(item.password !== item.repeatPassword){
            setMessage("Senhas precisam ser as mesmas")

        }else{
            usersApi.create(idCompany, {...item, repeatPassword:undefined})
            .then(() => setMessage("Cadastro Realizado!"))
            .catch(() => setMessage("Algo deu errado!!"))
        }

    }

    return (
        <Tab.Group>
        <Tab.List className='w-full h-full flex flex-col items-center mt-8'>
            <div className='w-11/12 flex flex-row gap-2'>
                <Tab className='nav-btn'>
                {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                    className={
                        selected ? 'bg-[#5500C3]' : 'bg-[#E6E6E6] text-black'
                    }
                    >
                    Cadrastamento
                    </button>
                )}
                </Tab>
                

                <Tab className='nav-btn'>
                {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                    className={
                        selected ? 'bg-[#5500C3]' : 'bg-[#E6E6E6] text-black'
                    }
                    >
                    Lista
                    </button>
                )}
                </Tab>
            </div>
        </Tab.List>

        <div className='w-full h-full flex flex-col items-center mt-8'>
            <div className='w-11/12'>

            <Tab.Panels>
            <Tab.Panel className='container-empresas'>
                <FormUsuarios
                    modelChange={modelChange} 
                    message={message}
                    handleSubmit={handleSubmit}
                    />
            </Tab.Panel>

            <Tab.Panel className='container-empresas'>
                <ListaUsuarios users={users} />
            </Tab.Panel>
            </Tab.Panels>
        </div>
        </div>
      </Tab.Group>
    )
}

export default Usuarios