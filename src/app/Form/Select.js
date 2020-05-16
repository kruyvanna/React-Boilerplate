import React from 'react'
import { useField } from 'formik'

export const Select = ({ label, className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={className + ' field'}>
      <label className="label">{label}</label>
      <div className="control">
        <div className="select width-100">
          <select className="width-100" {...field} {...props}></select>
          {meta.touched && meta.error ? (
            <p className="help is-danger">{meta.error}</p>
          ) : null}
        </div>
      </div>

      {meta.touched && meta.error ? (
        <p className="help is-danger">{meta.error}</p>
      ) : null}
    </div>
  )
}
