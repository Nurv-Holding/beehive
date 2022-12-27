import { useNavigate } from 'react-router-dom';
import Header from '../../Header';
import { Tab } from '@headlessui/react'

function FormWayOfBeing({ modelChange, message, handleSubmit }) {
    const navigate = useNavigate()

    const routerBack = () => {
        navigate(-1)
    }
    return (
        <>
            <Header />

            <main className='flex h-full'>
                <Tab.Group>
                    <Tab.List className='container-nav-empresas'>
                        <div className='w-11/12 flex flex-col gap-2'>
                            <Tab className='nav-btn'>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                        }
                                    >
                                        Visão de Futuro
                                    </button>
                                )}
                            </Tab>

                            <Tab className='nav-btn'>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                        }
                                    >
                                        Princípio
                                    </button>
                                )}
                            </Tab>

                            <Tab className='nav-btn'>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                        }
                                    >
                                        Proposito
                                    </button>
                                )}
                            </Tab>

                            <Tab className='nav-btn'>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-[#5500C3]' : 'bg-white text-black'
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
                                            selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                        }
                                    >
                                       Voltar
                                    </button>
                                )}
                            </Tab>
                        </div>
                    </Tab.List>

                    <div className='w-full flex flex-col items-center mt-8'>
                        <div className='w-full'>
                            <Tab.Panels>
                                <Tab.Panel className='w-full flex flex-col items-center'>
                                    <div>
                                        <span className='m-2 text-center justify-self-center text-[#5500C3] font-bold text-2xl hover:cursor-default'>
                                            Cadastrar Visão de futuro
                                        </span>
                                    </div>

                                    <div className='flex flex-col w-2/4 min-h-[300px] justify-center items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
                                        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center p-4 gap-4'>
                                            <div className='w-[70%] flex flex-col items-center justify-center gap-4'>
                                                <input type="text" required className="input-style text-center" placeholder='Título' onChange={modelChange} />
                                                
                                                <textarea className="p-2 input-style min-h-[25px] text-center" placeholder='Descrição' name="note" onChange={modelChange} cols="60" rows="3"></textarea>
                                            </div>

                                            <button className='submit-button mt-4' type="submit">Cadastrar</button>
                                        </form>
                                        <span className="text-center"> {message} </span>
                                    </div>
                                </Tab.Panel>

                                <Tab.Panel className='w-full flex flex-col items-center'>
                                    <div>
                                        <span className='m-2 text-center justify-self-center text-[#5500C3] font-bold text-2xl hover:cursor-default'>
                                            Cadastrar Princípio
                                        </span>
                                    </div>

                                    <div className='flex flex-col w-2/4 min-h-[300px] justify-center items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
                                        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center p-4 gap-4'>
                                            <div className='w-[70%] flex flex-col items-center justify-center gap-4'>
                                                <input type="text" required className="input-style text-center" placeholder='Título' onChange={modelChange} />
                                                
                                                <textarea className="p-2 input-style min-h-[25px] text-center" placeholder='Descrição' name="note" onChange={modelChange} cols="60" rows="3"></textarea>
                                            </div>

                                            <button className='submit-button mt-4' type="submit">Cadastrar</button>
                                        </form>
                                        <span className="text-center"> {message} </span>
                                    </div>
                                </Tab.Panel>

                                <Tab.Panel className='w-full flex flex-col items-center'>
                                    <div>
                                        <span className='m-2 text-center justify-self-center text-[#5500C3] font-bold text-2xl hover:cursor-default'>
                                            Cadastrar Proposito
                                        </span>
                                    </div>

                                    <div className='flex flex-col w-2/4 min-h-[300px] justify-center items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
                                        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center p-4 gap-4'>
                                            <div className='w-[70%] flex flex-col items-center justify-center gap-4'>
                                                <input type="text" required className="input-style text-center" placeholder='Título' onChange={modelChange} />
                                                
                                                <textarea className="p-2 input-style min-h-[25px] text-center" placeholder='Descrição' name="note" onChange={modelChange} cols="60" rows="3"></textarea>
                                            </div>

                                            <button className='submit-button mt-4' type="submit">Cadastrar</button>
                                        </form>
                                        <span className="text-center"> {message} </span>
                                    </div>
                                </Tab.Panel>

                                <Tab.Panel className='w-full flex flex-col items-center'>
                                    <div>
                                        <span className='m-2 text-center justify-self-center text-[#5500C3] font-bold text-2xl hover:cursor-default'>
                                            Cadastrar Objetivo
                                        </span>
                                    </div>

                                    <div className='flex flex-col w-2/4 items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
                                        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center p-4'>
                                            <div className='w-[70%] gap-2 flex flex-wrap items-center justify-center'>
                                                <input type="text" required className="input-style" placeholder='Nome' onChange={modelChange} />

                                                <input type="text" required className="input-style" placeholder='Cargo' onChange={modelChange} />

                                                <input type="text" required className="input-style" placeholder='Email' onChange={modelChange} />

                                                <input type="password" required className="input-style" placeholder='Senha' onChange={modelChange} />

                                                <input type="password" required className="input-style" placeholder='Repita a senha' onChange={modelChange} />
                                            </div>

                                            <button className='submit-button mt-4' type="submit">Cadastrar</button>
                                        </form>
                                        <span className="text-center"> {message} </span>
                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </div>
                    </div>
                </Tab.Group>
            </main>
        </>
    )

}

export default FormWayOfBeing