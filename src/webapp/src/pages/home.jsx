import Header from '../components/Header';
import Profile from '../components/profile';
import Compromisses from '../components/compromisses';
import Tasks from '../components/tasks';
import Reminder from '../components/reminder';
import Calendar from '../components/calendar';
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