import './App.css';
import CountdownHeader from './Components/CountdownHeader'
import {useEffect, useState} from 'react'
import CountdownBody from './Components/CountdownBody'

function App() {
  const [today] = useState({date: new Date()})
  const [timeLeft, setTimeLeft] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null
  })
  
  function time(param) {
    return param < 10 ? `0${param}` : param
  }
  
  function calcTime() {
    const date = new Date()
    const birthDay = new Date(`12 Feb 2022`)
    const diffTime = birthDay - date
    let _sec = 1000;
    let _min = 60 * _sec;
    let _hour = 60 * _min;
    let _day = 24 * _hour;
  
    setTimeLeft({
      days: Math.floor(diffTime / _day),
      hours: time(Math.floor((diffTime % _day) / _hour)),
      minutes: time(Math.floor((diffTime % _hour) / _min)),
      seconds: time(Math.floor((diffTime % _min) / _sec))
    });
  }
  
  useEffect(() => {
      setInterval(calcTime, 1000)
  })
  
  return (
    <div className='global__container'>
      <CountdownHeader today={today}/>
      <CountdownBody
        days={timeLeft.days}
        hours={timeLeft.hours}
        minutes={timeLeft.minutes}
        seconds={timeLeft.seconds}/>
      <div className="overlay"/>
    </div>
  )
}

export default App;
