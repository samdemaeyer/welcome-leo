import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './App.css'
import { MainBg } from './components/MainBg';
import { useState } from 'react';

export default function App() {
  const [babyBorrelModalIsOpen, setBabyBorrelModalIsOpen] = useState(false);
  const [addressModalIsOpen, setAddressModalIsOpen] = useState(false);

  return (
    <MainBg>
      <div className="frame-border">
        <div className='content'>
          <h2 className='h2'>You are invited to</h2>
          <h1 className='h1'>
            Leo De Maeyer's<br className="heading-break" />
            <button onClick={() => setBabyBorrelModalIsOpen(true)} className='baby-borrel-info-button'>
              Baby Borrel <i className="fa-solid fa-circle-info"></i>
            </button>
            <Modal open={babyBorrelModalIsOpen} onClose={() => setBabyBorrelModalIsOpen(false)} center>
              <h2>A baby borrel is a tradition in Flanders.</h2>
              <p>
                The old custom was for friends and family to come to the hospital to see the baby right after the birth, or to drop by the house in the weeks following. Eventually, the constant stream of visitors got to be too much and someone had the idea to throw one big party where the new baby could be introduced to the family's wider social circle.
              </p>
            </Modal>
          </h1>
          <div className='event-date'>
            <span>August</span>
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
              Kruisherenlaan 29
            </p>
            <button onClick={() => setAddressModalIsOpen(true)} className='address-info-button'>
              3500 Hasselt, België <i className="fa-solid fa-circle-info"></i>
            </button>


            <Modal open={addressModalIsOpen} onClose={() => setAddressModalIsOpen(false)} center>
              <h2>Ontmoetingscentrum Heilig Kruis<br />Kruisherenlaan 29, 3500 Hasselt, België <br /> <br /></h2>
              <iframe className="map-iframe" title="Map - Ontmoetingscentrum Heilig Kruis" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20901.564420347142!2d5.320256407988882!3d50.92368186090528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c122266b5d396b%3A0xea6a3d3b888398f3!2sParochiaal%20%2FOntmoetingscentrum%20Heilig%20Kruis%20Runkst%20VZW!5e0!3m2!1sen!2suk!4v1720448981833!5m2!1sen!2suk" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Modal>
          </div>
        </div>
      </div>
    </MainBg>
  );
}
