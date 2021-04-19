import { useState } from 'react'
import Header from './header/header'
import Main from './main/Main'

function App() {

  const [mobileMenu, setMobileMenu ] = useState(false)

  function toggleMenu () {
    setMobileMenu(!mobileMenu)
  }

  return (
    <div className='font-nunito'>
      <Header setMobileMenu={toggleMenu} mobileMenu={mobileMenu}/>
      <Main/>
    </div>
  );
}

export default App;
