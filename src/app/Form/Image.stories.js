import React from 'react'
import { action } from '@storybook/addon-actions'
import { Formik, Form } from 'formik'
import { Image } from './Image'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  title: 'Image',
  component: Image
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
        <Image label="Name" name="name" type="text" placeholder="Vanna"></Image>
      </Form>
    </Formik>
  )
}
