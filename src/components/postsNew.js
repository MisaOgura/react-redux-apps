import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { createPost } from '../actions'

class PostsNew extends Component {
  renderField (field) {
    // nested destructuring to pull out the values of the properties
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit (values) {
    this.props.createPost(values, () => {
      // redirecting users to the index page
      this.props.history.push('/')
    })
  }

  render () {
    const { handleSubmit } = this.props

    return (
      // callback this.onSubmit will be excecuted outside the context
      // of the component so needs to be bound with this!
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Title for the new post'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Post content'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className="btn btn-primary">Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }
}

// called automatically by redux form upon submit
// before the callback passed to the handleSubmit is called
function validate (values) {
  const errors = {}

  if (!values.title) {
    errors.title = 'Enter a title'
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories'
  }

  if (!values.content) {
    errors.content = 'Enter some content please!'
  }
  // if errors is an empty object, the form is fine to submit
  // if errors has *any* properties, form is invalid
  return errors
}

// directly 'connect' the component
// to the formReducer
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
)