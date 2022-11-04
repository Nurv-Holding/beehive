import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextUser } from '../context/ContextUser';

function CompaniesList() {
    const {companies} = useContext(ContextUser);

    return (
        <div className='grid-row grid-general min-h-[525px]'>
        <h1 className='container-title'>Empresas</h1>

        <div>
            <ul className='flex flex-col gap-2'>
                {(companies || []).map((company) => {
                    return(
                        <button className='w-full bg-[#5500C3] p-2 rounded-md text-white text-sm font-medium'>
                            <Link className='w-full text-right' to={`/empresas/${company.id}`}>
                                {company.name}
                            </Link>
                        </button>
                    )
                })}
            </ul>
        </div>
      </div>
    )
}

export default CompaniesList;