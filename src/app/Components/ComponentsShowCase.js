import React from 'react'
import styled from 'styled-components'

import { DeleteConfirmButton } from './DeleteConfirmButton'
import { Spinner } from './Spinner'

const Item = styled.div`
  margin-top: 20px;
`

export const ComponentsShowCase = () => {
  return (
    <div className="container">
      <h1>COMPONENTS</h1>
      <Item>
        <div>Delete Confirm Button</div>
        <DeleteConfirmButton></DeleteConfirmButton>
      </Item>

      <Item>
        <div>Spinner</div>
        <Spinner></Spinner>
      </Item>
    </div>
  )
}
