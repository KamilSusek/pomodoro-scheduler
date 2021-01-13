import  { Component } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal')

export default class Modal extends Component {
  element: HTMLDivElement
  constructor (props: any) {
    super(props)
    this.element = document.createElement('div')
  }

  componentDidMount () {
    if (modalRoot) {
      modalRoot.appendChild(this.element)
    }
  }

  componentWillUnmount () {
    if (modalRoot) {
      modalRoot.removeChild(this.element)
    }
  }
  render () {
    return createPortal(this.props.children, this.element)
  }
}
