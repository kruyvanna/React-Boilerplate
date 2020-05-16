import ImageUploading from 'react-images-uploading'
import React from 'react'
import { action } from '@storybook/addon-actions'

export const ImageUpload = () => {
  function onChange(files) {
    console.log('on change', files)
  }

  const maxNumber = 1
  const maxMbFileSize = 5

  return (
    <ImageUploading
      onChange={onChange}
      maxNumber={maxNumber}
      multiple
      maxFileSize={maxMbFileSize}
      acceptType={['jpg', 'gif', 'png']}
    >
      {({ imageList, onImageUpload, onImageRemoveAll }) => (
        // write your building UI
        <div>
          <button onClick={onImageUpload}>Upload images</button>
          <button onClick={onImageRemoveAll}>Remove all images</button>

          {imageList.map((image) => (
            <div key={image.key}>
              <img src={image.dataURL} />
              <button onClick={image.onUpdate}>Update</button>
              <button onClick={image.onRemove}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  )
}
