import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function ListUsers({ users }) {
  return (
    <div className='grid grid-cols-3 gap-3 w-[90%] p-4'>
      {(users || []).map((user) => {
        return (
          <>
            <div className="bg-white w-full aspect-square overflow-y-scroll rounded-3xl shadow-lg flex flex-col items-center justify-center">
              <span className="text-bee-strong-1 text-xl font-bold text-center uppercase">
                {user.name}
              </span>

              <span className="text-bee-blue-clean text-xs mt-2 font-bold">Email</span>
              <div className='w-full text-base font-bold text-black text-center'>
                {user.email}
              </div>

              <span className="text-bee-blue-clean text-xs mt-2 font-bold">Cargo</span>
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

export default ListUsers;