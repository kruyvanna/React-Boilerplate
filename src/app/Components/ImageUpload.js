import ImageUploading from 'react-images-uploading'
import React from 'react'
import { action } from '@storybook/addon-actions'
import axios from 'axios'

export const ImageUpload = ({ onImageUploaded }) => {
  const maxNumber = 1
  const maxMbFileSize = 5

  function onFilesChange(fileObjects) {
    if (fileObjects.length == 0) {
      return
    }

    const fileObject = fileObjects[0]

    const config = {
      onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        console.log(percentCompleted)
      }
    }

    const data = new FormData()
    data.append('file', fileObject.file)
    data.append('upload_preset', 'default')
    axios
      .post(`https://api.cloudinary.com/v1_1/kruyvanna/upload`, data, config)
      .then((response) => {
        const imageUrl = response.data.url
        console.log('uploaded file to', imageUrl)
        onImageUploaded && onImageUploaded(imageUrl)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  return (
    <ImageUploading
      onChange={onFilesChange}
      maxNumber={maxNumber}
      multiple
      maxFileSize={maxMbFileSize}
      acceptType={['jpg', 'gif', 'png']}
    >
      {({ imageList, onImageUpload, onImageRemoveAll }) => (
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
