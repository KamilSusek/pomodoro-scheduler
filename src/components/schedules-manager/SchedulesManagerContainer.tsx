import React, { Component } from 'react'
import SchedulesManagerList from './SchedulesManagerList'
import axios from '../../axios/axios'
import './schedules-manager.css'

export default class SchedulesManagerContainer extends Component<
  {},
  { schedules: [] }
> {
  constructor (props: any) {
    super(props)

    this.state = {
      schedules: []
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
    return (
      <div>
        <SchedulesManagerList schedules={this.state.schedules} />
      </div>
    )
  }
}
