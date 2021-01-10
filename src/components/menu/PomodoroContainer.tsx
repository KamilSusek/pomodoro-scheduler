import React, { Component } from 'react'
import ClockContainer from '../clock/ClockContainer'
import TasksContainer from '../task/TasksContainer'
import './menu.css'

class PomodoroContainer extends Component<{}> {
  constructor (props: any) {
    super(props)
  }

  componentDidMount () {}

  render () {
    return (
      <div className='menu'>
        <div className='task__container'>
          <TasksContainer />
        </div>
        <div>
          <ClockContainer />
        </div>
        <div className='schedules__container'></div>
      </div>
    )
  }
}

export default PomodoroContainer
