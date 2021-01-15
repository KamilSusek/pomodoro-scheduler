import React from 'react'
import { FaTrashAlt, FaRegEdit, FaAngleDown } from 'react-icons/fa'

function SchedulesManagerItem (props: any) {
  return (
    <div className='schedules__list_item'>
      <h3>{props.schedule.title}</h3>
      <div className='icons__box'>
        <button>
          <FaAngleDown color="black"/>
        </button>
        <button>
          <FaRegEdit color='blue' />
        </button>
        <button>
          <FaTrashAlt color='red' />
        </button>
      </div>
    </div>
  )
}

export default SchedulesManagerItem
