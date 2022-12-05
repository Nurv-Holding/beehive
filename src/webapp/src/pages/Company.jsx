import Header from '../components/Header';
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