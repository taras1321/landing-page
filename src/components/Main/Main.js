import leftCorner from './icons/corner-left.svg'
import rightCorner from './icons/corner-right.svg'
import line from './icons/line.svg'
import './Main.css'

const Main = () => {
  return (
    <div className="main">
      <h1>Lorem ipsum set ammet test-test</h1>
      <h2>LET US HELP YOU GET IT ALL BACK!</h2>
      <img src={line} alt="line" className="line" />
      <div className="info">
        <div className="text">
          We currently take cases <br /> that are $10,000 US and up
        </div>
        <button>Get a free consultation</button>
      </div>
      <img src={leftCorner} alt="decor" className="left-corner" />
      <img src={rightCorner} alt="decor" className="right-corner" />
    </div>
  )
}

export default Main
