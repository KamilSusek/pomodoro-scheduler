import React from 'react'
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa'
interface Task {
  completed: boolean
  title: string
  description: string
}

interface TaskProp {
  isSelected: boolean
  task: Task
  setTask(task: Task, index: number): void
  index: number
}

function TaskItem ({ isSelected, index, task, setTask }: TaskProp) {
  return (
    <div
      className={isSelected ? 'selected task__item' : 'task__item'}
      onClick={() => {
        setTask(task, index)
      }}
    >
      {task.title} {task.completed ? <FaRegCheckCircle /> : <FaRegCircle />}
    </div>
  )
}

export default TaskItem
