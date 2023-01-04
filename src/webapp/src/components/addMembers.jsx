import Modal from "./CompanyMenuPanel/Goals/components/Modal"

const AddMembers = ({ isOpen, closeModal, usersAndTeams, users }) => {

    return (
        <>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div className='flex flex-row justify-between'>
                    <div className='w-2/4'>
                        <span className='text-gray-500'>Lista de Integrantes</span>
                        <div className='w-[80%] flex flex-col bg-gray-300 p-1 rounded-md'>
                            {(usersAndTeams || []).map((user) => {
                                return (
                                    <>
                                        <span className='my-0.5 overflow-hidden'>
                                            {user.nameUser}
                                        </span>
                                    </>
                                )
                            })}
                        </div>
                    </div>

                    <form className='w-2/4 flex flex-col'>
                        <span className='text-gray-500'>Adicionar Integrante</span>
                        <div className='input-and-label-container'>
                            <select name="user" id="users" className="input-style">
                                <option disabled selected>Selecionar Integrante</option>
                                {(users || []).map((user) => {
                                    return (
                                        <>
                                            <option value={user.id} className='my-0.5 overflow-hidden'>
                                                {user.name}
                                            </option>
                                        </>
                                    )
                                })}
                            </select>
                        </div>

                        <button className='submit-button mt-3' type="submit">Adicionar</button>
                        <span> mensagem do jefferson </span>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default AddMembers