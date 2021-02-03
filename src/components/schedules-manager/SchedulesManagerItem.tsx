import React, { useState } from 'react'
import { FaTrashAlt, FaRegEdit, FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function SchedulesManagerItem (props: any) {
  const [isShown, setIsShown] = useState(false)

  const toggleShow = () => {
    setIsShown(!isShown)
  }

  return (
    <div>
      <div className='schedules__list_item'>
        <h3>{props.schedule.title}</h3>
        <div className='icons__box'>
          <div className='icons__container'>
            <div>
              {isShown ? (
                <FaAngleUp
                  className='icon'
                  onClick={toggleShow}
                  color='black'
                />
              ) : (
                <FaAngleDown
                  className='icon'
                  onClick={toggleShow}
                  color='black'
                />
              )}
            </div>
            <div>
              <Link to={`/manager/${props.schedule.id}`}>
                <FaRegEdit className='icon' color='blue' />
              </Link>
            </div>
            <div>
              <FaTrashAlt className='icon' color='red' />
            </div>
          </div>
        </div>
      </div>
      {isShown && (
        <ul>
          {props.schedule.tasks.map((task: any, index: number) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SchedulesManagerItem
