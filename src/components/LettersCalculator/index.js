// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  lettersCount = event => {
    const newText = event.target.value
    this.setState({inputText: newText})
  }

  render() {
    const {inputText} = this.state
    const count = inputText.length
    return (
      <div className="bg-conatiner">
        <div className="card">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="label-text" htmlFor="input">
              Enter the phrase
            </label>
            <input
              className="input"
              id="input"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.lettersCount}
              value={inputText}
            />
            <p className="count-letters">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
