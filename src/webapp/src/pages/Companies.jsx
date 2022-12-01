import Header from '../components/header';
import EmpresasMenu from './sub-pages/CompanyMenu';

function Companies() {
  return (
    <>
      <Header />

      <main className='w-full flex flex-row'>
          <EmpresasMenu/>
      </main>
    </>
  );
}

export default Companies;