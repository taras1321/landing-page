import { useState } from 'react'
import logo from './icons/Express.svg'
import selectClose from './icons/select-close.svg'
import selectOpen from './icons/select-open.svg'
import selectActive from './icons/select-active.svg'
import menu from './icons/menu.svg'
import close from './icons/close.svg'
import './Header.css'

const Header = (props) => {
  const [activeItem, setActiveItem] = useState('home')

  function linkClickHandler(event, item) {
    event.preventDefault()
    setActiveItem(item)
  }

  function selectClickHandler(event, item) {
    event.preventDefault()
    event.stopPropagation()

    if (props.selectOpen) {
      props.setSelectOpen(false)
      return
    }

    setActiveItem(item)
    props.setSelectOpen(true)
  }

  function clickMenuHandler() {
    if (props.showMobileMenu) {
      props.setShowMobileMenu(false)
    } else {
      props.setShowMobileMenu(true)
    }
  }

  return (
    <div
      className="header"
      style={{ background: props.type === 'mob' ? '#fff' : '' }}
    >
      <img src={logo} className="logo" alt="logo" />
      <div className="nav">
        <a
          href="/"
          className={activeItem === 'home' ? 'active' : ''}
          onClick={(e) => linkClickHandler(e, 'home')}
        >
          Home
        </a>
        <a
          href="/"
          className={activeItem === 'about' ? 'active' : ''}
          onClick={(e) => linkClickHandler(e, 'about')}
        >
          About us
        </a>

        <a
          href="/"
          className={activeItem === 'services' ? 'active ' : ''}
          onClick={(e) => selectClickHandler(e, 'services')}
        >
          Our services
          {activeItem === 'services' && props.selectOpen === true ? (
            <img src={selectOpen} alt="select" className="select" />
          ) : activeItem === 'services' ? (
            <img src={selectActive} alt="select" className="select" />
          ) : (
            <img src={selectClose} alt="select" className="select" />
          )}
          {props.selectOpen ? (
            <ul className="options">
              <li className="option">Lorem ipsum</li>
              <li className="option">Lorem ipsum</li>
              <li className="option">Lorem ipsum</li>
              <li className="option">Lorem ipsum</li>
            </ul>
          ) : null}
        </a>

        <a
          href="/"
          className={activeItem === 'contact' ? 'active' : ''}
          onClick={(e) => linkClickHandler(e, 'contact')}
        >
          Contact us
        </a>
      </div>
      <div>
        <button>Call us</button>
        <div className="menu" onClick={clickMenuHandler}>
          {props.type === 'mob' ? (
            <img src={close} alt="menu" className="menu-icon" />
          ) : (
            <img src={menu} alt="menu" className="menu-icon" />
          )}

          <span className="menu-text">Menu</span>
        </div>
      </div>
    </div>
  )
}

export default Header
