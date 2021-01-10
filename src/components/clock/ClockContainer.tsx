import React from 'react'
import ClockController from './ClockController'
import Clock from './Clock'
import ClockDurationController from './ClockDurationController'
import { connect } from 'react-redux'
import './clock.css'
import FinishTaskModal from '../modal/FinishTaskModal'
import CounterState from './CounterState'
import { SET_TASK } from '../../redux/actions/actionsTypes'

type ClockState = {
  minutes: number
  seconds: number
  counterState: CounterState
  isStarted: boolean
  showModal: boolean
}

interface Task {
  title: string
  id: number
  description: string
  completed: boolean
}

class ClockContainer extends React.Component<{ task: Task }, ClockState> {
  private intervalId: NodeJS.Timeout | undefined
  private readonly LEARNING_SCHEDULE_DURATION_IN_MINUTES = 25
  private readonly PAUSE_DURATION_IN_MINUTES = 5
  private readonly LONG_PAUSE_DURATION_IN_MINUTES = 10
  private readonly FULL_MINUTE_COUNTED_FROM_ZERO = 59

  constructor (props: any) {
    super(props)
    this.state = {
      minutes: 25,
      seconds: 0,
      counterState: CounterState.SCHEDULE_COUNTER,
      isStarted: false,
      showModal: false
    }

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.reset = this.reset.bind(this)
    this.switchCounterState = this.switchCounterState.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onYesSelected = this.onYesSelected.bind(this)
    this.onNoSelected = this.onNoSelected.bind(this)
  }

  /* Check if task was changed*/
  componentDidUpdate (prevProps: Readonly<{ task: Task }>) {
    if (
      prevProps &&
      prevProps.task &&
      prevProps.task.title !== this.props.task.title
    ) {
      this.reset()
    }
  }

  /* Trigger count down every one second. */
  componentDidMount () {
    this.intervalId = setInterval(() => this.counter(), 1000)
  }

  componentWillUnmount () {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  isCountFinished (): boolean {
    const { seconds, minutes, counterState } = this.state

    if (minutes - 1 < 0 && seconds - 1 < 0) {
      this.reset()
      if (counterState) {
        this.openModal()
      }
      return true
    }
    return false
  }

  shouldCountDownByMinute (): boolean {
    const { seconds, minutes } = this.state

    if (seconds - 1 < 0) {
      this.setState(state => ({
        minutes: minutes - 1,
        seconds: this.FULL_MINUTE_COUNTED_FROM_ZERO
      }))
      return true
    }
    return false
  }

  countDownBySecond () {
    const { seconds } = this.state
    this.setState(state => ({
      seconds: seconds - 1
    }))
  }

  counter () {
    if (this.state.isStarted)
      this.isCountFinished() === false &&
        this.shouldCountDownByMinute() === false &&
        this.countDownBySecond()
  }

  start () {
    this.setState(state => ({ isStarted: true }))
  }

  stop () {
    this.setState(state => ({ isStarted: false }))
  }

  reset () {
    const { counterState } = this.state
    switch (counterState) {
      case CounterState.SCHEDULE_COUNTER:
        this.setState(state => ({
          minutes: this.LEARNING_SCHEDULE_DURATION_IN_MINUTES,
          seconds: 0,
          isStarted: false
        }))
        break

      case CounterState.PAUSE_COUNTER:
        this.setState(state => ({
          minutes: this.PAUSE_DURATION_IN_MINUTES,
          seconds: 0,
          isStarted: false
        }))
        break

      case CounterState.LONG_PAUSE_COUNTER:
        this.setState(state => ({
          minutes: this.LONG_PAUSE_DURATION_IN_MINUTES,
          seconds: 0,
          isStarted: false
        }))
        break

      default:
      case CounterState.SCHEDULE_COUNTER:
        this.setState(state => ({
          minutes: this.LEARNING_SCHEDULE_DURATION_IN_MINUTES,
          seconds: 0,
          isStarted: false
        }))
        break
    }
  }

  switchCounterState (durationId: CounterState) {
    switch (durationId) {
      case CounterState.SCHEDULE_COUNTER:
        this.setState({
          minutes: this.LEARNING_SCHEDULE_DURATION_IN_MINUTES,
          counterState: CounterState.SCHEDULE_COUNTER,
          seconds: 0,
          isStarted: false
        })
        break
      case CounterState.PAUSE_COUNTER:
        this.setState({
          minutes: this.PAUSE_DURATION_IN_MINUTES,
          counterState: CounterState.PAUSE_COUNTER,
          seconds: 0,
          isStarted: false
        })
        break
      case CounterState.LONG_PAUSE_COUNTER:
        this.setState({
          minutes: this.LONG_PAUSE_DURATION_IN_MINUTES,
          counterState: CounterState.LONG_PAUSE_COUNTER,
          seconds: 0,
          isStarted: false
        })
        break
      default:
        this.setState({
          minutes: this.LEARNING_SCHEDULE_DURATION_IN_MINUTES,
          seconds: 0,
          isStarted: false
        })
        break
    }
  }

  openModal () {
    this.setState(state => ({ showModal: true }))
  }

  closeModal () {
    this.setState(state => ({ showModal: false }))
  }

  onYesSelected () {
    this.closeModal()
  }

  onNoSelected () {
    this.closeModal()
  }

  render () {
    if (this.props.task) {
      const { title } = this.props.task
      return (
        <div className='clock_menu__container'>
          <ClockDurationController
            counterState={this.state.counterState}
            switchDuration={this.switchCounterState}
          />
          <h1>{title}</h1>
          <Clock
            isStarted={this.state.isStarted}
            start={this.start}
            stop={this.stop}
            reset={this.reset}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
          />
          <FinishTaskModal
            showModal={this.state.showModal}
            handleClose={this.closeModal}
            onYesSelected={this.onYesSelected}
            onNoSelected={this.onNoSelected}
          />
        </div>
      )
    } else {
      return <></>
    }
  }
}

export const mapStateToProps = (state: any) => {
  return { task: state.tasks.task }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    onSet: (task: any) => dispatch({ type: SET_TASK, payload: task })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockContainer)
