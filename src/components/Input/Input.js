import { useState } from 'react'
import './Input.css'

const Input = ({ label, type }) => {
  const [showLabel, setShowLabel] = useState(false)

  function inputFocusHanlder() {
    setShowLabel(true)
  }

  function inputBlurHandler() {
    setShowLabel(false)
  }

  return (
    <div className="input-wrapper">
      <label htmlFor={label} style={{ opacity: showLabel ? 1 : 0 }}>
        {label}
      </label>
      <input
        placeholder={showLabel ? '' : label}
        className="input"
        type={type}
        id={label}
        onFocus={inputFocusHanlder}
        onBlur={inputBlurHandler}
      />
    </div>
  )
}

export default Input
