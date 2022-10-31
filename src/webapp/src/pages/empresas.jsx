import Header from '../components/Header';
import EmpresasMenu from './sub-pages/empresasMenu';

function empresas() {
  return (
    <>
      <Header />

      <main className='w-full flex flex-row'>
          <EmpresasMenu/>
      </main>
    </>
  );
}

export default empresas;