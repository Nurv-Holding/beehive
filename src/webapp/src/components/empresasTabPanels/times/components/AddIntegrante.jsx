import { Link } from "react-router-dom"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function AddIntegrante() {
    //MODAL SCRIPT
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    //END MODAL SCRIPT
    return (
        <>
            <button className="border border-gray-400 rounded py-1 text-xs hover:bg-gray-400 hover:text-white"
                onClick={openModal}
            >
                <span>Adicionar Integrante</span>
            </button>

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
                                <Dialog.Panel className="flex flex-col w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-[#5500C3]"
                                    >
                                        Adicionar Integrante
                                    </Dialog.Title>

                                    <span className="text-xs text-gray-500">Tarefa</span>

                                    <form className="mt-2 flex flex-col">
                                        <div className='input-and-label-container'>
                                            <label for='input-integrantes'>Integrantes</label>
                                            <input name='input-integrantes' list='emails' className='input-style' placeholder='Digite os Integrantes' />

                                            <datalist id="emails">
                                                <option value="Email do Victor">Email do Victor</option>
                                            </datalist>
                                        </div>
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
}

export default AddIntegrante