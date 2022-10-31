import { Link } from "react-router-dom"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function Modal({ goals }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    return (
        <div className='flex flex-col items-center'>
            <div className='container-table-objectives-list-times'>
                {(goals || []).map((goal) => {
                    return (
                        <>
                            <div className='container-card-empresas'>
                                <Link to={`/objetivo/${goal.id}`}>
                                    <span>{goal.name}</span>
                                </Link>

                                <button
                                    type="button"
                                    className="modal-btn"
                                    onClick={openModal}
                                >
                                    Adicionar Tarefa
                                </button>
                            </div>

                            <Transition appear show={isOpen} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                                    </Transition.Child>

                                    <div className="fixed inset-0 overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg font-medium leading-6 text-gray-900"
                                                    >
                                                        Adicionar Tarefa
                                                    </Dialog.Title>
                                                    <form className="mt-2 flex flex-col">
                                                        <label for="tarefa">Tarefa:</label>
                                                        <input name='tarefa' type='text' className='input-style' />

                                                        <label for="tarefa">Descrição:</label>
                                                        <input name='Descrição' type='text' className='input-style' />

                                                        <label>Data Inicial</label>
                                                        <input className='input-style' type="date" />

                                                        <label>Data Final</label>
                                                        <input className='input-style' type="date" />
                                                    </form>

                                                    <div className="mt-4">
                                                        <button className='submit-button' type="submit" onClick={closeModal}>
                                                            Adicionar
                                                        </button>
                                                    </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition>
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default Modal