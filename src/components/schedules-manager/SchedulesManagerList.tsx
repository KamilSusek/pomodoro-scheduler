import React from 'react'
import WaitingScreen from '../schedule-list/WaitingScreen'
import SchedulesManagerItem from './SchedulesManagerItem'

function SchedulesManagerList (props: any) {
  return (
    <div className="schedules__list">
      {props.schedules && props.schedules.length ? (
        props.schedules.map((schedule: any, index: Number) => (
          <SchedulesManagerItem schedule={schedule}/>
        ))
      ) : (
        <WaitingScreen />
      )}
    </div>
  )
}

export default SchedulesManagerList
