import React from 'react'
import { action } from '@storybook/addon-actions'
import { Formik, Form } from 'formik'
import { TextInput } from './TextInput'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  title: 'TextInput',
  component: TextInput
}

const initialValues = {
  name: ''
}

export const Default = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={action('submit form with values')}
    >
      <Form>
        <TextInput
          label="Name"
          name="name"
          type="text"
          placeholder="Vanna"
        ></TextInput>
      </Form>
    </Formik>
  )
}
