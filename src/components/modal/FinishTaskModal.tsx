import React from 'react'
import Modal from './Modal'
import './modal.css'

interface FinishTaskModalProps {
  showModal: boolean
  handleClose(): void
  onYesSelected(): void
  onNoSelected(): void
}

function FinishTaskModal ({
  showModal,
  handleClose,
  onYesSelected,
  onNoSelected
}: FinishTaskModalProps) {
  if (showModal) {
    return (
      <React.Fragment>
        <Modal>
          <div className='modal'>
            <div className='modal__container'>
              <button onClick={handleClose}>X</button>
              <h1>Time is up!</h1>
              <p>Do you want to mark this task as finished?</p>
              <button onClick={onYesSelected}>Yes</button>
              <button onClick={onNoSelected}>No</button>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    )
  } else {
    return <></>
  }
}

export default FinishTaskModal
