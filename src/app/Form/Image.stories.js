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
  image: ''
}

export const Default = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={action('submit form with values')}
    >
      <Form>
        <Image label="Image" name="image" type="text"></Image>
        <button className="button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  )
}
