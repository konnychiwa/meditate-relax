import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useState, Component } from "react"
import InputTimer from "./InputTimer"
import ShowTimer from "./ShowTimer"
import { AlarmSnd } from "../utils"

const Timer = () => {
  const [isStart, setIsStart] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timerId, setTimerId] = useState(0)

  const handleStart = () => {
    if (hours == 0 && minutes == 0 && seconds == 0) {
      alert("Invalid Input")
      return
    } else {
      setIsStart(true)
    }
  }

  const handleResume = () => {
    setIsPaused(false)
    runTimer(seconds, minutes, hours)
  }
  const handlePause = () => {
    setIsPaused(true)
    clearInterval(timerId)
  }

  const handleReset = () => {
    setIsStart(false)
    resetTimer()
  }

  const resetTimer = () => {
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    clearInterval(timerId)
  }

  const handleInput = (e) => {
    console.log(e.target.id, e.target.value)
    const value = parseInt(e.target.value)
    const id = e.target.id
    if (id === "hours") {
      setHours(value)
    } else if (id === "minutes") {
      setMinutes(value)
    } else {
      setSeconds(value)
    }
  }

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1)
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1)
      setSeconds(59)
    } else if (min === 0) {
      setHours((h) => h - 1)
      setMinutes(59)
      setSeconds(59)
    }

    if (sec === 0 && min === 0 && hr === 0) {
      handleReset()
      new Audio(AlarmSnd).play()
      clearInterval(tid)
      return
    }
  }

  useEffect(() => {
    let tid
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds, minutes, hours, tid)
      }, 1000)
      setTimerId(tid)
    }

    return () => {
      clearInterval(tid)
    }
  }, [isStart, hours, minutes, seconds])
  console.log(hours, minutes, seconds)

  useGSAP(() => {
    gsap.to("#timer", {
      y: 0,
      opacity: 1,
      delay: 1.2,
    })
  }, [])

  return (
    <div className="section-timer">
      <div>
        <h1 id="timer" className="section-heading">
          Meditation Timer
        </h1>
        <div className="input-container ">
          {!isStart && (
            <InputTimer handleStart={handleStart} handleInput={handleInput} />
          )}
          {isStart && (
            <ShowTimer
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              isPaused={isPaused}
              handlePause={handlePause}
              handleReset={handleReset}
              handleResume={handleResume}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Timer
