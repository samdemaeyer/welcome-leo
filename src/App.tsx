import './App.css'
import hugo from './assets/hugo.png'
import dragon from './assets/dragon.png'
import picnic from './assets/picnic.png'
import klokje from './assets/birth-details.svg'

export default function App() {
  return (
    <main className="main-wrapper">
      <div className="main-bg"></div>
      <div className='container'>
        <div>
          <h1 className="title">
            <span className='firstname'>Leo </span> <span className='lastname'>De Maeyer</span>
            <img src={dragon} alt="Draggon hovering london" className='dragon' />
          </h1>
        </div>
        <img src={hugo} alt="hugo running" className='hugo' />
        <img src={picnic} alt="Kira, Sam and Leo at a picnic" className='picnic' />
        <div className='main-text-wrapper'>
          <p>
            Sunday 23rd of June 2024, a bright and sunny morning in South London, the world welcomed a new star. <br />Little <strong className='bold'>Leo De Maeyer</strong> was born at 10:58 in the morning. The sun shone brightly, as if it knew a special little boy was about to make his debut into the world.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, explicabo? Sed quaerat ut suscipit hic impedit, id omnis culpa quod et magnam repellendus dolor harum quas consequatur, ratione dolorem voluptate.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, explicabo? Sed quaerat ut suscipit hic impedit, id omnis culpa quod et magnam repellendus dolor harum quas consequatur, ratione dolorem voluptate.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, explicabo? Sed quaerat ut suscipit hic impedit, id omnis culpa quod et magnam repellendus dolor harum quas consequatur, ratione dolorem voluptate.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, explicabo? Sed quaerat ut suscipit hic impedit, id omnis culpa quod et magnam repellendus dolor harum quas consequatur, ratione dolorem voluptate.
          </p>
        </div>
      </div>
    </main>
  );
}
