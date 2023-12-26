import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {
    Timer: 25,
    TimerStatus: false,
    PlusMinus: true,
    Seconds: 0,
  }

  startBtn = () => {
    const {Timer, TimerStatus, PlusMinus, Seconds} = this.state
    this.setState({
      TimerStatus: !TimerStatus,
      PlusMinus: false,
    })

    this.secTimerId = setInterval(this.descSec, 1000)
  }

  resetBtn = () => {
    this.setState({Timer: 25, PlusMinus: true, Seconds: 0})
    clearInterval(this.secTimerId)
  }

  pauseBtn = () => {
    const {TimerStatus, Seconds, Timer} = this.state
    this.setState({TimerStatus: !TimerStatus, PlusMinus: false})
    clearInterval(this.secTimerId)
    const Sec = Seconds
    const Min = Timer
    this.setState({Seconds: Sec, Timer: Min})
  }

  decreaseTime = () => {
    const {Timer} = this.state

    this.setState(prevState => ({Timer: prevState.Timer - 1}))
  }

  increaseTime = () => {
    this.setState(prevState => ({Timer: prevState.Timer + 1}))
  }

  descSec = () => {
    const {Seconds, Timer} = this.state

    if (Seconds === 0) {
      this.setState({Timer: Timer - 1})
    }
    if (Seconds === 0) {
      this.setState({Seconds: 59 + 1})
    }
    this.setState(prevState => ({Seconds: prevState.Seconds - 1}))
  }

  render() {
    const {Timer, TimerStatus, PlusMinus, Seconds} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="first-container">
          <div className="timer-container">
            <div className="Timer-container">
              <h1 className="Timer-para">
                {Timer}:{Seconds >= 10 ? Seconds : `0${Seconds}`}
              </h1>
              {TimerStatus ? (
                <p className="Timer-status">Running</p>
              ) : (
                <p className="Timer-status">Paused</p>
              )}
            </div>
          </div>
          <div className="second-container">
            <div className="container1">
              {TimerStatus ? (
                <div className="TimeStatus-container">
                  <button className="btn" type="button">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png "
                      alt="pause icon"
                      className="image"
                    />
                  </button>
                  <button className="para btn1" onClick={this.pauseBtn}>
                    Pause
                  </button>
                </div>
              ) : (
                <div className="TimeStatus-container">
                  <button className="btn" type="button">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play icon"
                      className="image"
                    />
                  </button>
                  <button className="para btn1" onClick={this.startBtn}>
                    Start
                  </button>
                </div>
              )}
              <div className="TimeStatus-container">
                <button className="btn" type="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="image"
                  />
                </button>
                <button className="para btn1" onClick={this.resetBtn}>
                  Reset
                </button>
              </div>
            </div>
            <div className="Timer-limit-container">
              <p className="para1">Set Timer limit</p>
              {PlusMinus ? (
                <div className="max-min-timer">
                  <button
                    type="button"
                    className="btn"
                    onClick={this.decreaseTime}
                  >
                    -
                  </button>
                  <p className="para2">{Timer}</p>
                  <button
                    type="button"
                    className="btn"
                    onClick={this.increaseTime}
                  >
                    +
                  </button>
                </div>
              ) : (
                <div className="max-min-timer">
                  <button type="button" className="btn">
                    -
                  </button>
                  <p className="para2">25</p>
                  <button type="button" className="btn">
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
