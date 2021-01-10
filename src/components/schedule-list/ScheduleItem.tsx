import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Schedule } from './Schedule'

interface ScheduleItemProps {
  schedule: Schedule
}

function ScheduleItem (props: ScheduleItemProps) {
  return (
    <li className='schedule__item'>
      <h1>{props.schedule.title}</h1>
      <p>{props.schedule.description}</p>
      <Link to={`/pomodoro/${props.schedule.id}`} className='primary'>
        View
      </Link>
    </li>
  )
}

export default ScheduleItem
