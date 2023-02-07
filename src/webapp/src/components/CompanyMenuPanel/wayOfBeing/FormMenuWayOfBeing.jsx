import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Tab } from '@headlessui/react'
import AuthorizeAccess from '../../AuthorizeAccess';

function FormMenuWayOfBeing() {
    const navigate = useNavigate()
    const { idCompany, idFutureVision } = useParams()

    const redirectRouter = (path) => {
        navigate(path)
    }

    return (
        <>
            <AuthorizeAccess userAutorized={["adminMaster", "adminCorporate"]}>

                <main className='flex h-full'>
                    <Tab.Group>
                        <Tab.List className='h-full-side-bar-calc flex flex-col gap-4 min-w-[15%] bg-gray-200 p-2'>

                            <Tab className='w-full'>
                                {({ selected }) => (
                                    <button onClick={() => redirectRouter(`/company/${idCompany}/formfuturevisionchildren/${idFutureVision}`)}
                                        className={
                                            selected && 'text-bee-blue-clean bg-gray-300 w-full p-4 rounded-md' || 'w-full p-4 rounded-md bg-white text-bee-blue-clean hover:bg-gray-300'
                                        }
                                    >
                                        Objetivo
                                    </button>
                                )}
                            </Tab>

                            <Tab>
                                {({ selected }) => (
                                    <button onClick={() => redirectRouter(`register/principles`)}
                                        className={
                                            selected && 'text-bee-blue-clean bg-gray-300 w-full p-4 rounded-md' || 'w-full p-4 rounded-md bg-white text-bee-blue-clean hover:bg-gray-300'
                                        }
                                    >
                                        Princípio
                                    </button>
                                )}
                            </Tab>

                            <Tab>
                                {({ selected }) => (
                                    <button onClick={() => redirectRouter(`register/proposals`)}
                                        className={
                                            selected && 'text-bee-blue-clean bg-gray-300 w-full p-4 rounded-md' || 'w-full p-4 rounded-md bg-white text-bee-blue-clean hover:bg-gray-300'
                                        }
                                    >
                                        Propósito
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>

                        <div className='w-full flex flex-col items-center mt-8'>
                            <Tab.Panels>
                                <Outlet />
                            </Tab.Panels>
                        </div>
                    </Tab.Group>
                </main>
            </AuthorizeAccess>
        </>
    )

}

export default FormMenuWayOfBeing