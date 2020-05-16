import React from 'react'
import { useField } from 'formik'

export const Image = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)
  const { name, onChange, onBlur, value } = field
  const { setValue } = helpers

  console.log('field', field)
  console.log('meta', meta)
  console.log('helpers', helpers)

  function handleChange(e) {
    const value = e.target.value
    setValue(value)
  }
  return (
    <div className="field">
      <h2>Image upload</h2>
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type="text" onChange={handleChange} />
      </div>

      {meta.touched && meta.error ? (
        <p className="help is-danger">{meta.error}</p>
      ) : null}
    </div>
  )
}
