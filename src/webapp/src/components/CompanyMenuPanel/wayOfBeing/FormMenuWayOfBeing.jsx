import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Tab } from '@headlessui/react'
import AuthorizeAccess from '../../AuthorizeAccess';

function FormMenuWayOfBeing() {
    const navigate = useNavigate()
    const {idCompany} = useParams()

    const routerBack = () => {
        navigate(`/company/${idCompany}`)
    }

    const redirectRouter = (path) => {
        navigate(path)
    }

    return (
        <>
            <AuthorizeAccess userAutorized={["adminMaster","adminCorporate"]}>

            <main className='flex h-full'>
                <Tab.Group>
                    <Tab.List className='container-nav-empresas'>

                        <Tab className='nav-btn'>
                            {({ selected }) => (
                                <button onClick={() => redirectRouter(`register/principles`)}
                                    className={
                                        selected ? 'text-bee-blue-clean bg-gray-100' : 'text-black p-2'
                                    }
                                >
                                    Princípio
                                </button>
                            )}
                        </Tab>

                        <Tab className='nav-btn'>
                            {({ selected }) => (
                                <button onClick={() => redirectRouter(`register/proposals`)}
                                    className={
                                        selected ? 'text-bee-blue-clean bg-gray-100' : 'text-black p-2'
                                    }
                                >
                                    Propósito
                                </button>
                            )}
                        </Tab>

                        <Tab className='nav-btn'>
                            {({ selected }) => (
                                <button onClick={() => redirectRouter(`register/goals`)}
                                    className={
                                        selected ? 'text-bee-blue-clean bg-gray-100' : 'text-black p-2'
                                    }
                                >
                                    Objetivo
                                </button>
                            )}
                        </Tab>

                        <Tab className='nav-btn'>
                            {({ selected }) => (
                                <button onClick={routerBack}
                                    className={
                                        selected ? 'text-bee-blue-clean bg-gray-100' : 'text-black p-2'
                                    }
                                >
                                    Voltar
                                </button>
                            )}
                        </Tab>
                    </Tab.List>

                    <div className='w-full flex flex-col items-center mt-8'>
                        <div className='w-full'>
                            <Tab.Panels>
                                <Outlet />
                            </Tab.Panels>
                        </div>
                    </div>
                </Tab.Group>
            </main>
            </AuthorizeAccess>
        </>
    )

}

export default FormMenuWayOfBeing