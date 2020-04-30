import React from 'react'
import { action } from '@storybook/addon-actions'
import { Spinner } from './Spinner'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  title: 'Spinner',
  component: Spinner
}

export const Default = () => <Spinner></Spinner>
