import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function WaitingScreen () {
  return (
    <div className='spinner__content'>
      <div className='waiting__screen'>
        <AiOutlineLoading3Quarters />
      </div>
      <h1>Fetching data...</h1>
      <h1>This may take a while.</h1>
    </div>
  )
}

export default WaitingScreen
