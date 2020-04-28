import React from 'react'
import { useField } from 'formik'

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type="text" {...field} {...props} />
      </div>

      {meta.touched && meta.error ? (
        <p className="help is-danger">{meta.error}</p>
      ) : null}
    </div>
  )
}
