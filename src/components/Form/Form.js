import { useState } from 'react'
import Input from '../Input/Input'
import './Form.css'

const Form = () => {
  const [showLabel, setShowLabel] = useState(false)

  function textFocusHanlder() {
    setShowLabel(true)
  }

  function textBlurHandler() {
    setShowLabel(false)
  }

  return (
    <div className="form">
      <h3>
        Contact <span>Us</span>
      </h3>
      <form className="form-el">
        <Input label="First Name" type="text" />
        <Input label="Last name" type="text" />
        <Input label="Phone" type="phone" />
        <Input label="Enter email" type="email" />
        <div className="text-wrapper">
          <label
            htmlFor="text"
            style={{ opacity: showLabel ? 1 : 0 }}
          >
            Tell Us What Happened
          </label>

          <textarea
            id="text"
            placeholder={showLabel ? '' : 'Tell Us What Happened'}
            onFocus={textFocusHanlder}
            onBlur={textBlurHandler}
          />
        </div>

        <button onClick={(e) => e.preventDefault()}>Send</button>
      </form>
    </div>
  )
}

export default Form
