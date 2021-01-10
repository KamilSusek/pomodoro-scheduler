import React from 'react'
import { FaPlay, FaPause, FaUndoAlt } from 'react-icons/fa'

interface ClockProps {
  minutes: number
  seconds: number
  isStarted: boolean
  start(): void
  stop(): void
  reset(): void
}

function Clock ({
  isStarted,
  start,
  stop,
  reset,
  minutes,
  seconds
}: ClockProps) {
  return (
    <div className='clock__container'>
      <div className='clock__outline'>
        <div className='clock__content'>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          <div>
            {isStarted ? (
              <FaPause cursor='pointer' onClick={stop} />
            ) : (
              <FaPlay cursor='pointer' onClick={start} />
            )}
            <FaUndoAlt cursor='pointer' onClick={reset} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clock
