import React, { useState } from 'react'
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
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number>()

  const setTask = (task: any, index: number) => {
    setCurrentTaskIndex(index)
    onSet(task)
  }

  if (tasks && title) {
    return (
      <div>
        <h1>{title}</h1>
        {tasks.length > 0 &&
          tasks.map((task, index) => (
            <TaskItem key={index} index={index} isSelected={index === currentTaskIndex} task={task} setTask={setTask} />
          ))}
      </div>
    )
  } else {
    return <></>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
