import React from 'react'

interface ClockControllerProps {
  start(): void
  stop(): void
  reset(): void
}

function ClockController ({ start, stop, reset }: ClockControllerProps) {
  return (
    <div className="clock__controls">
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ClockController
