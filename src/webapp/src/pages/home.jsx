import Header from '../components/header';
import Profile from '../components/profile';
import Tasks from '../components/tasks';
import Methodology from '../components/methodology';

function Home() {
  return (
    <>
      <Header />

      <main>
        <div className='grid-container'>

{/* FIRST COL */}
          <div className='grid-col'>
            <Profile />
            <Methodology />
          </div>

{/* SECOND COL */}
            <div className='grid-col'>
              <Tasks />
            </div>

{/* THIRD COL */}
            {/* <div className='grid-col'>
              <Methodology />
            </div> */}
          </div>
      </main>
    </>
  );
}

export default Home;