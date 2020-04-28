import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { TextInput } from './TextInput'

const initialValues = {
  id: '',
  name: ''
}

const validationSchema = Yup.object({
  id: Yup.string()
    .required('Required')
    .test('CheckIdExist', 'ID already taken', function(value) {
      return new Promise((resolve, reject) => {
        if (!value) {
          resolve(false)
          return
        }
        setTimeout(() => {
          resolve(false)
        }, 400)
      })
    }),
  name: Yup.string().required('Required')
})

export const SampleForm = () => {
  function onSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-one-third">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <TextInput label="ID" name="id" type="text"></TextInput>

              <TextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Vanna"
              ></TextInput>

              <button className="button is-primary" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}
