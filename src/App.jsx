
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <div className='px-8' >
    <Navbar> </Navbar>
    </div>
      <div className='w-[1280px] mx-auto' >
        <Outlet> </Outlet>
      </div>
      <Footer> </Footer>
    </>
  )
}

export default App
