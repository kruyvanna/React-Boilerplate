import React from 'react'
import { useField } from 'formik'

import { ImageUpload } from '../Components'

export const ImageInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)
  const { name, onChange, onBlur, value } = field
  const { setValue, setTouched } = helpers

  function handleImageUploaded(url) {
    setValue(url)
    setTouched(true)
  }

  function handleDeleteConfirm() {
    setValue('')
  }

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <ImageUpload
          onImageUploaded={handleImageUploaded}
          onDeleteConfirm={handleDeleteConfirm}
        ></ImageUpload>
      </div>

      {meta.touched && meta.error ? (
        <p className="help is-danger">{meta.error}</p>
      ) : null}
    </div>
  )
}
