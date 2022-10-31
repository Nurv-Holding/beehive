import { Link } from 'react-router-dom'
import EmpresasMenu from './sub-pages/empresasMenu';

function empresas() {
  return (
    <>
      <main className='w-full flex flex-row'>
          <EmpresasMenu/>
      </main>
    </>
  );
}

export default empresas;