import React from 'react'
import { action } from '@storybook/addon-actions'
import { DeleteConfirmButton } from './DeleteConfirmButton'
import 'bulma/css/bulma.css'

export default {
  title: 'DeleteConfirmButton',
  component: DeleteConfirmButton
}

export const Text = () => (
  <DeleteConfirmButton
    onConfirm={action('Confirm clicked')}
  ></DeleteConfirmButton>
)
