import React from 'react'
import { Schedule } from './Schedule'
import ScheduleItem from './ScheduleItem'
import WaitingScreen from './WaitingScreen'

interface ScheduleListProps {
  schedules: Schedule[] | undefined
}

function ScheduleList (props: ScheduleListProps) {
  return (
    <ul className='schedules__container'>
      {props.schedules && props.schedules.length > 0 ? (
        props.schedules.map((schedule: Schedule, index: number) => (
          <ScheduleItem key={index} schedule={schedule} />
        ))
      ) : (
        <WaitingScreen />
      )}
    </ul>
  )
}

export default ScheduleList
