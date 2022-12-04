import Header from '../components/header';
import CompanyMenu from './sub-pages/CompanyMenu';

function Company() {
  return (
    <>
      <Header />

      <main className='w-full flex flex-row'>
          <CompanyMenu/>
      </main>
    </>
  );
}

export default Company;