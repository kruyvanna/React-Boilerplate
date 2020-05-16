import ImageUploading from 'react-images-uploading'
import React from 'react'
import { action } from '@storybook/addon-actions'

import { ImageUpload } from './ImageUpload'

export default {
  title: 'Image Upload',
  component: ImageUpload
}

export const Default = () => (
  <ImageUpload onImageUploaded={action('on image uploaded')}></ImageUpload>
)
