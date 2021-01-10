import React, { Component } from 'react'
import { Schedule } from './Schedule'
import ScheduleList from './ScheduleList'
import axios from '../../axios/axios'
import './schedule.css'

interface ScheduleListContainerState {
  schedules: Schedule[] | undefined
}

class ScheduleListContainer extends Component<{}, ScheduleListContainerState> {
  constructor (props: any) {
    super(props)

    this.state = {
      schedules: undefined
    }
  }

  async fetchSchedules () {
    try {
      const response = await axios.get('/schedule/all')
      this.setState(state => ({ schedules: response.data }))
    } catch (error) {}
  }

  componentDidMount () {
    this.fetchSchedules()
  }

  render () {
    const { schedules } = this.state
    return (
      <div>
        <ScheduleList schedules={schedules} />
      </div>
    )
  }
}

export default ScheduleListContainer
