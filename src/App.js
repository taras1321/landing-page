import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import MobileMenu from './components/MobileMenu/MobileMenu'
import './App.css'

function App() {
  const [selectOpen, setSelectOpen] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  function appClickHandler() {
    setSelectOpen(false)
  }

  return (
    <div className="app" onClick={appClickHandler}>
      <div className="decor">
        <div className="first-elipse" />
        <div className="second-elipse" />
      </div>
      <Header
        selectOpen={selectOpen}
        setSelectOpen={setSelectOpen}
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      <div className="container">
        <Main />
        <Form />
      </div>
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        selectOpen={selectOpen}
        setSelectOpen={setSelectOpen}
      />
      <Footer />
    </div>
  )
}

export default App
