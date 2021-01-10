import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PomodoroContainer from '../menu/PomodoroContainer'
import ScheduleCreatorForm from '../schedule-creator/ScheduleCreatorForm'
import ScheduleListContainer from '../schedule-list/ScheduleListContainer'
import axios from '../../axios/axios'

export default class RouteContainer extends Component {
  constructor (props: any) {
    super(props)
    this.sendSchedule = this.sendSchedule.bind(this)
  }

  async sendSchedule (values: any) {}

  async submit (values: any) {
    try {
      const response = await axios.post('/schedule/add', values)
    } catch (error) {}
  }

  render () {
    return (
      <Switch>
        <Route path='/pomodoro/:id'>
          <PomodoroContainer />
        </Route>
        <Route path='/create'>
          <div className='content'>
            <ScheduleCreatorForm onSubmit={this.submit} />
          </div>
        </Route>
        <Route path='/'>
          <div className='content'>
            <ScheduleListContainer />
          </div>
        </Route>
      </Switch>
    )
  }
}
