import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './header/header'
import Main from './main/Main'
import MobileMenu from './mobileMenu/MobileMenu'

function App() {

  const [mobileMenu, setMobileMenu] = useState(false)

  function toggleMenu() {
    setMobileMenu(!mobileMenu)
  }

  return (
    <div className='font-nunito'>
      <Router>
        <Header setMobileMenu={toggleMenu} mobileMenu={mobileMenu} />
        <MobileMenu setMobileMenu={toggleMenu} mobileMenu={mobileMenu} />
        <Main/>
      </Router>
    </div>
  );
}

export default App;
