import { useContext } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import usersApi from "../api/usersApi"
import { ContextCompany } from "../context/ContextCompany"
import NewModal from "./CompanyMenuPanel/Goals/components/NewModal"

const EditUser = ({idRef, item, message, setMessage, idProfile, setIdProfile, status, setStatus}) => {
    const {profiles, payload, idCompany} = useContext(ContextCompany)
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const updateUser = (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        const newStatus = status === 0? false: true

        if(payload?.nameProfile === "adminMaster"){
            usersApi.update(item.id,{idProfile, status:newStatus})
            .then(() => {
                setMessage("Atualizado")
                navigate({
                    pathname: `/company/${idCompany}/userslist`,
                    search: `?update=${true}`
                })

            })
            .catch((error) => {
                console.error(error)
                setMessage("Algo deu errado!")
            })
        }

    }

    const returnNewProfiles = () => {
        return profiles.filter(e => e.name !== "adminMaster")
    }

    return(
        <NewModal idRef={idRef}>
            <form onSubmit={updateUser} className="flext flex-col text-center text-black m-4 p-4">
                <div>
                    <h1 className="text-center uppercase text-bee-strong-1 text-3xl font-bold"> Alterar o perfil </h1>
                    <select onChange={({ target }) => setIdProfile(parseInt(target?.value))} className="my-2">
                        <option selected disabled value={item?.idProfile} > Selecione um perfil </option>
                        {(returnNewProfiles() || []).map((profile) => {
                            return(
                                <option value={profile?.id} > {`${profile?.name === "userCorporate"? "Usuário": "Administrador"}`} </option>
                            )
                            
                        })}
                    </select>
                </div>

                <div>
                    <h1 className="text-center uppercase text-bee-strong-1 text-3xl font-bold"> Editar o status </h1>
                    <select onChange={({ target }) => setStatus(parseInt(target?.value))} className="my-2" name="" id="">
                        <option selected disabled > Selecione um status </option>
                        <option value={1}> Ativo </option>
                        <option value={0}> Inativo </option>
                    </select>
                </div>

                <button type="sumit" className='bg-bee-blue-clean px-10 py-[7px] rounded-md text-white text-sm cursor-pointer hover:bg-sky-900 my-4'>Alterar</button>
                <span className="text-center"> {message} </span>
            </form>
        </NewModal>
    )
}

export default EditUser