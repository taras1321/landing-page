import { useState } from 'react'
import Header from '../Header/Header'
import selectClose from './icons/select-close.svg'
import selectOpen from './icons/select-open.svg'
import selectActive from './icons/select-active.svg'
import './MobileMenu.css'

const MobileMenu = (props) => {
  const { showMobileMenu, setShowMobileMenu } = props

  const [activeItem, setActiveItem] = useState('home')

  const cls = ['mob-menu']

  if (showMobileMenu) {
    cls.push('active')
  }

  document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'

  function linkClickHandler(event, item) {
    event.preventDefault()
    setActiveItem(item)
    setShowMobileMenu(false)
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

  return (
    <div className={cls.join(' ')}>
      <Header
        type="mob"
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      <ul className="mob-nav">
        <li className="nav-item">
          <a
            href="/"
            className={activeItem === 'home' ? 'link active' : 'link'}
            onClick={(e) => linkClickHandler(e, 'home')}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className={
              activeItem === 'about' ? 'link active' : 'link'
            }
            onClick={(e) => linkClickHandler(e, 'about')}
          >
            About us
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className={
              activeItem === 'services' ? 'link active' : 'link'
            }
            onClick={(e) => selectClickHandler(e, 'services')}
          >
            Our services
            {activeItem === 'services' &&
            props.selectOpen === true ? (
              <img src={selectOpen} alt="select" className="select" />
            ) : activeItem === 'services' ? (
              <img
                src={selectActive}
                alt="select"
                className="select"
              />
            ) : (
              <img
                src={selectClose}
                alt="select"
                className="select"
              />
            )}
          </a>

          {props.selectOpen ? (
            <ul className="options">
              <li
                className="option"
                onClick={() => setShowMobileMenu(false)}
              >
                Lorem ipsum
              </li>
              <li
                className="option"
                onClick={() => setShowMobileMenu(false)}
              >
                Lorem ipsum
              </li>
              <li
                className="option"
                onClick={() => setShowMobileMenu(false)}
              >
                Lorem ipsum
              </li>
              <li
                className="option"
                onClick={() => setShowMobileMenu(false)}
              >
                Lorem ipsum
              </li>
            </ul>
          ) : null}
        </li>
        <li className="nav-item">
          <a
            href="/"
            className={
              activeItem === 'contact' ? 'link active' : 'link'
            }
            onClick={(e) => linkClickHandler(e, 'contact')}
          >
            Contact us
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
