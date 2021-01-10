import React from 'react'

interface InputFieldProps {
  onChange?(): void
  label?: string
  type?: 'text' | 'password' | 'email'
  name: string
}

function InputField (props: InputFieldProps) {
  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <input onChange={props.onChange} type={props.type} name={props.name} />
    </div>
  )
}

export default InputField
