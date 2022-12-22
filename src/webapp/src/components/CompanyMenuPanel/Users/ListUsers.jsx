import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function ListUsers({ users }) {
  return (
    <div className='grid grid-cols-2 gap-3 w-3/4 p-4'>
      {(users || []).map((user) => {
        return (
          <>
            <div className="bg-slate-100 max-w-[250px] w-full aspect-square overflow-y-scroll rounded-3xl shadow-lg flex flex-col items-center justify-center">
              <span className="text-[#5500C3] text-xl font-bold text-center uppercase">
                {user.name}
              </span>

              <span className="text-[#5500C3] text-xs mt-2 font-bold">Descrição</span>
              <div className='w-full text-base font-bold text-black text-center'>
                {user.email}
              </div>

              <span className="text-[#5500C3] text-xs mt-2 font-bold">líder</span>
              <div className='w-full text-base font-bold text-black text-center'>
                {user.occupation}
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default ListUsers