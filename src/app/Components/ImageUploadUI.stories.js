import ImageUploading from 'react-images-uploading'
import React from 'react'
import { action } from '@storybook/addon-actions'
import 'bulma/css/bulma.css'

import { ImageUploadUI } from './ImageUploadUI'

export default {
  title: 'Image Upload UI',
  component: ImageUploadUI
}

export const Default = () => (
  <ImageUploadUI
    status="uploading"
    image="http://res.cloudinary.com/kruyvanna/image/upload/v1589688509/images/rfpnsfiodmugnzvjspco.jpg"
  ></ImageUploadUI>
)
