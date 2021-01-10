import React from 'react'
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa'
interface Task {
  completed: boolean
  title: string
  description: string
}

interface TaskProp {
  task: Task
  handleTaskSetting(task: Task): void
}

function TaskItem ({ task, handleTaskSetting }: TaskProp) {
  return (
    <div
      className='task__item'
      onClick={() => {
        handleTaskSetting(task)
      }}
    >
      {task.title} {task.completed ? <FaRegCheckCircle /> : <FaRegCircle />}
    </div>
  )
}

export default TaskItem
