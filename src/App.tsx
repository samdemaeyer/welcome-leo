import './App.css'
import { MainBg } from './components/MainBg';

export default function App() {
  return (
    <MainBg>
      <div className="frame-border">
        <div className='content'>
          <h2 className='h2'>You are invited to</h2>
          <h1 className='h1'>
            Leo De Maeyer's<br />
            Baby Borrel
          </h1>
          <div className='event-date'>
            <span>September</span>
            <div className='middle'>
              <span className='lined'>Sunday</span>
              <span className='day'>25</span>
              <span className='lined'>At 14:00</span>
            </div>
            <span>2024</span>
          </div>
          <div className='location-wrapper'>
            <p className='location-content'>
              Ontmoetingscentrum Heilig Kruis <br />
              Kruisherenlaan 29 <br />
              3500 Hasselt, België
            </p>
          </div>
        </div>
      </div>
    </MainBg>
  );
}
