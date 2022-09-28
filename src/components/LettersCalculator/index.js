// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onTextValue = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="calculatorDiv">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="label" htmlFor="inputText">
              Enter the phrase
            </label>
            <br />
            <input
              id="inputText"
              className="textBox"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onTextValue}
            />
            <p className="box">No.of letters: {count}</p>
          </div>
          <div className="imageDiv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
