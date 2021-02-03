import React, { Component, useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from '../../../axios/axios'

class ScheduleEditContainer extends Component<
  { match: any; location: any; history: any },
  {
    title: string | undefined
    description: string | undefined
    id: number | undefined
    tasks: [] | undefined
  }
> {
  constructor (props: any) {
    super(props)
    this.state = {
      title: undefined,
      description: undefined,
      id: undefined,
      tasks: undefined
    }
  }

  async fetchSchedule (id: number) {
    try {
      const response = await axios.get(`/schedule/id/${id}`)
      console.log(response.data)
      this.setState(response.data)
    } catch (error) {}
  }

  componentDidMount () {
    const { id } = this.props.match.params
    this.fetchSchedule(id)
  }
  render () {
    return (
      <div>
        <h1>Title: {this.state.title}</h1>
        <h2>Description: {this.state.description}</h2>
        <hr />
        <h3>Tasks</h3>
        <ul>
          {this.state.tasks && this.state.tasks.length > 0 ? (
            this.state.tasks.map((task: any, index: number) => (
              <TaskEditableListItem
                title={task.title}
                description={task.description}
              />
            ))
          ) : (
            <div></div>
          )}
        </ul>
      </div>
    )
  }
}

function TaskEditableListItem ({ title, description }: any) {
  const [taskTitle, setTaskTitle] = useState({ title: title, editable: false })
  const [taskDescription, setTaskDescription] = useState({
    description: description,
    editable: false
  })

  return (
    <div>
      <div>
        {taskTitle.editable ? (
          <input value={taskTitle.title} />
        ) : (
          <h4>{taskTitle.title}</h4>
        )}
        {taskDescription.editable ? (
          <React.Fragment>
            <input
              value={taskDescription.description}
              onChange={event =>
                setTaskDescription({
                  ...taskDescription,
                  description: event.target.value
                })
              }
            />
            <button
              onClick={() =>
                setTaskDescription({
                  ...taskDescription,
                  editable: !taskDescription.editable
                })
              }
            >
              x
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>{taskDescription.description}</p>
            <button
              onClick={() =>
                setTaskDescription({
                  ...taskDescription,
                  editable: !taskDescription.editable
                })
              }
            >
              x
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default withRouter(ScheduleEditContainer)
