import React from 'react'
import CounterState from './CounterState'

interface ClockDurationControllerProp {
  switchDuration(durationId: number): void
  counterState: CounterState
}

function ClockDurationController ({
  switchDuration,
  counterState
}: ClockDurationControllerProp) {
  return (
    <div className='clock__controls'>
      <button
        className={
          counterState === CounterState.SCHEDULE_COUNTER ? 'selected' : ''
        }
        onClick={() => switchDuration(CounterState.SCHEDULE_COUNTER)}
      >
        Task
      </button>
      <button
        className={
          counterState === CounterState.PAUSE_COUNTER ? 'selected' : ''
        }
        onClick={() => switchDuration(CounterState.PAUSE_COUNTER)}
      >
        Pause
      </button>
      <button
        className={
          counterState === CounterState.LONG_PAUSE_COUNTER ? 'selected' : ''
        }
        onClick={() => switchDuration(CounterState.LONG_PAUSE_COUNTER)}
      >
        Long pause
      </button>
    </div>
  )
}

export default ClockDurationController
