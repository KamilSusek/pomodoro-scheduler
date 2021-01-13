import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../clock/ClockContainer'
import TaskItem from './TaskItem'

interface Task {
  completed: boolean
  title: string
  description: string
}

interface TaskListProp {
  tasks: Task[] | undefined
  title: string | undefined
  onSet(task: Task): void
}

function TaskList ({ title, tasks, onSet }: TaskListProp) {
  if (tasks && title) {
    return (
      <div>
        <h1>{title}</h1>
        {tasks.length > 0 &&
          tasks.map((task, index) => (
            <TaskItem key={index} task={task} handleTaskSetting={onSet} />
          ))}
      </div>
    )
  } else {
    return <></>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
