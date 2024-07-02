import hugo from '../assets/hugo.png'
import dragon from '../assets/dragon.png'
import picnic from '../assets/picnic.png'
import type { FC, PropsWithChildren } from 'react'
import './MainBg.css'

export const MainBg: FC<PropsWithChildren> = ({ children }) =>
  <main>
    <img src={hugo} alt="hugo running" className='hugo' />
    <img src={picnic} alt="Kira, Sam and Leo at a picnic" className='picnic' />
    <img src={dragon} alt="Draggon hovering london" className='dragon' />
    <div className="main-bg">
    </div>
    {children}
  </main>
