import React from 'react'
import { action } from '@storybook/addon-actions'
import { Formik, Form } from 'formik'
import { ImageInput } from './ImageInput'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  title: 'ImageInput',
  component: ImageInput
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
        <ImageInput label="Image" name="image" type="text"></ImageInput>
        <button className="button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  )
}
