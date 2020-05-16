import React from 'react'
import { action } from '@storybook/addon-actions'
import { Formik, Form } from 'formik'
import { Select } from './Select'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  title: 'Select',
  component: Select
}

const initialValues = {
  category: ''
}

export const Default = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={action('submit form with values')}
    >
      <Form>
        <Select name="category">
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="development">Developer</option>
        </Select>
        <button className="button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  )
}
