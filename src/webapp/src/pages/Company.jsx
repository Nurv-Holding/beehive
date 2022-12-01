import Header from '../components/header';
import EmpresasMenu from './sub-pages/CompanyMenu';

function Company() {
  return (
    <>
      <Header />

      <main className='w-full flex flex-row'>
          <EmpresasMenu/>
      </main>
    </>
  );
}

export default Company;