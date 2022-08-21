import './App.css'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

export default function App() {

  return (
    <div className='max-w-[1440px] flex flex-col items-center'>
      <Header/>
      <Main/>

      <div class=" text-center pt-5">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className=' underline'>Frontend Mentor</a>. 
        Coded by <a href="https://rodrigol.netlify.app/" className='underline'>Rodrigo Lopes</a>.
      </div>
    </div>
  )
}
