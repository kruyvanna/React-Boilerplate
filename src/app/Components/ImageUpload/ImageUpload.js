import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading'
import { action } from '@storybook/addon-actions'
import axios from 'axios'

import { ImageUploadUI } from './ImageUploadUI'

export const ImageUpload = ({ onImageUploaded, onDeleteConfirm }) => {
  const maxNumber = 1
  const maxMbFileSize = 5

  const [status, setStatus] = useState('initial')
  const [image, setImage] = useState('')
  const [progress, setProgress] = useState(0)
  const [fileObject, setFileObject] = useState({})

  function handleDeleteConfirm(file) {
    file.onRemove()
    setStatus('initial')
    onDeleteConfirm && onDeleteConfirm()
  }

  function onFilesChange(fileObjects) {
    if (fileObjects.length == 0) {
      return
    }

    setStatus('uploading')

    const fileObject = fileObjects[0]
    setFileObject(fileObject)
    const file = fileObject.dataURL
    setImage(file)

    const config = {
      onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        setProgress(percentCompleted)
      }
    }

    const data = new FormData()
    data.append('file', fileObject.file)
    data.append('upload_preset', 'default')
    axios
      .post(`https://api.cloudinary.com/v1_1/kruyvanna/upload`, data, config)
      .then((response) => {
        const imageUrl = response.data.url
        onImageUploaded && onImageUploaded(imageUrl)
        setStatus('uploaded')
      })
      .catch((error) => {
        console.log('error', error)
        setStatus('uploaded')
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
      {({ imageList, onImageUpload, onImageRemoveAll }) => {
        let file = {}
        if (imageList.length > 0) {
          file = imageList[0]
        }
        return (
          <ImageUploadUI
            onChoosePhotoClick={onImageUpload}
            status={status}
            image={image}
            progress={progress}
            onDeleteConfirm={() => handleDeleteConfirm(file)}
          ></ImageUploadUI>
        )
      }}
    </ImageUploading>
  )
}

// <div>
//   <button type="button" onClick={onImageUpload}>
//     Upload images
//   </button>
//   <button type="button" onClick={onImageRemoveAll}>
//     Remove all images
//   </button>

//   {imageList.map((image) => (
//     <div key={image.key}>
//       <img src={image.dataURL} />
//       <button type="button" onClick={image.onUpdate}>
//         Update
//       </button>
//       <button type="button" onClick={image.onRemove}>
//         Remove
//       </button>
//     </div>
//   ))}
// </div>
