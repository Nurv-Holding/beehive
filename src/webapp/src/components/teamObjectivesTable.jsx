import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'

function teamObjectivesTable() {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className="w-11/12 rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex flex-row w-full items-center justify-between rounded-lg px-4 py-2">
                <div className='flex flex-row items-center'>
                  <span>&gt;&nbsp;</span>
                  <span>Montar Okr's</span>
                  <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
                </div>
                <span>4 dias</span>
                
                <div className='percentage-container-disclosure'>
                  <div className='percentage-bar-disclosure'></div>
                </div>

                <span>70% concluído</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <div className='flex flex-col'>
                  
                  <div className='flex flex-row items-center'>
                    <span>Montar Okr's</span>
                    <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
                  </div>
  
                  <div className='flex flex-row items-center'>
                    <span>Montar Okr's</span>
                    <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
                  </div>
  
                  <div className='flex flex-row items-center'>
                    <span>Montar Okr's</span>
                    <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
                  </div>
  
                  </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <div className="w-11/12 rounded-2xl bg-white p-2 mt-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex flex-row w-full items-center justify-between rounded-lg px-4 py-2">
                <div className='flex flex-row items-center'>
                  <span>&gt;&nbsp;</span>
                  <span>Montar Okr's</span>
                  <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
                </div>
                <span>4 dias</span>
                
                <div className='percentage-container-disclosure'>
                  <div className='percentage-bar-disclosure'></div>
                </div>

                <span>70% concluído</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className='flex flex-col'>

                <div className='flex flex-row items-center'>
                  <span>Montar Okr's</span>
                  <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
                </div>

                <div className='flex flex-row items-center'>
                  <span>Montar Okr's</span>
                  <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
                </div>

                <div className='flex flex-row items-center'>
                  <span>Montar Okr's</span>
                  <div className='w-3 h-3 ml-2 rounded-full bg-yellow-400 border border-black'></div>
                </div>

                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default teamObjectivesTable;