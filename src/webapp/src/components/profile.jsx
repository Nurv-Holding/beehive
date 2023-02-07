import { Link } from 'react-router-dom'

function profile({ payload }) {

  return (
    <div className='w-full bg-white p-4 flex flex-col items-center'>
      <div className='w-[60%] aspect-square rounded-full overflow-hidden'>
        <img alt='User profile' src="https://thispersondoesnotexist.com/image" />
      </div>

      <div className='flex flex-col cursor-default gap-2 mt-2'>
        <div className='flex flex-col gap-2'>
          <p className='text-xl text-bee-blue-clean'>{payload?.name}</p>

          <div className='flex flex-col gap-0.5'>
            <p className='text-xs text-gray-700'>{payload?.occupation}</p>
            <p className='text-xs text-gray-700'>{payload?.email}</p>
          </div>
        </div>

        <div>
          <Link
            to=""
            className="
                text-sm hover:text-bee-blue-clean border border-black 
                hover:border-bee-blue-clean border-x-0 border-t-0
            "
          >
            Alterar Perfil
          </Link>
        </div>
      </div>
    </div>
  )
}

export default profile