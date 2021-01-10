import React, { Component } from 'react'
import axios from '../../axios/axios'
import TaskList from './TaskList'
import './task.css'
import { Link, withRouter } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

interface Task {
  completed: boolean
  title: string
  description: string
}

interface TaskContainerState {
  title: string | undefined
  tasks: Task[] | undefined
}

class TasksContainer extends Component<
  { match: any; location: any; history: any },
  TaskContainerState
> {
  constructor (props: any) {
    super(props)

    this.state = {
      title: undefined,
      tasks: undefined
    }
  }

  async fetchTask (id: number) {
    try {
      const response = await axios.get(`/schedule/id/${id}`)
      this.setState(response.data)
    } catch (error) {}
  }

  componentDidMount () {
    const { id } = this.props.match.params
    console.log(id)
    this.fetchTask(id)
  }

  render () {
    if (this.state) {
      const { tasks, title } = this.state
      return (
        <div>
          <Link to='/'>
            <FaArrowLeft /> Go back to schedules
          </Link>
          <TaskList title={title} tasks={tasks} />
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default withRouter(TasksContainer)
