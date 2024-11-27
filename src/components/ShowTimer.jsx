const ShowTimer = (props) => {
  const {
    hours,
    minutes,
    seconds,
    isPaused,
    handlePause,
    handleReset,
    handleResume,
  } = props
  return (
    <div className="show-contaienr">
      <div className="timer-box">
        <div>{hours < 10 ? `0${hours}` : hours}</div>
        <span>:</span>
        <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
        <span>:</span>
        <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
      </div>

      <div className="input-box">
        {!isPaused && (
          <button onClick={handlePause} className="btn">
            Pause
          </button>
        )}
        {isPaused && (
          <button onClick={handleResume} className="btn">
            Resume
          </button>
        )}
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default ShowTimer
