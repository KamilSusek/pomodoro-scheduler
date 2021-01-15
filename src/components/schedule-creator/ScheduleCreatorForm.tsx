import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import './form.css'

const renderField = ({ input, label, type, meta: { touched, error } }: any) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderTasks = ({ fields, meta: { error } }: any) => (
  <ul>
    {fields.map((task: any, index: number) => (
      <li className='item' key={index}>
        <div>
          <Field
            name={`${task}.title`}
            type='text'
            component={renderField}
            label='Task'
          />

          <Field
            name={`${task}.description`}
            type='text'
            component={renderField}
            label='Descpription'
          />
        </div>
        <button
          className='red'
          type='button'
          title='Remove Task'
          onClick={() => fields.remove(index)}
        >
          x
        </button>
      </li>
    ))}
    {error && <li className='error'>{error}</li>}
    <li>
      <button className='green' type='button' onClick={() => fields.push()}>
        Add Task
      </button>
    </li>
  </ul>
)

function ScheduleCreatorForm (props: any): JSX.Element {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <div className='form__container'>
      <h1>Create schedule</h1>
      <form onSubmit={handleSubmit}>
        <Field name='title' type='text' label='Title' component={renderField} />
        <Field
          name='description'
          type='text'
          label='Description'
          component={renderField}
        />
        <FieldArray name='tasks' component={renderTasks} />
        <div className='control__panel'>
          <button className='blue' type='submit' disabled={submitting}>
            Submit
          </button>
          <button
            className='black'
            type='button'
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'createScheduleForm'
})(ScheduleCreatorForm)
