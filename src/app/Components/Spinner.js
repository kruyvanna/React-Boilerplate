import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`

export const Spinner = () => {
  return (
    <Container>
      <span className="icon has-text-success">
        <i className="fas fa-3x fa-circle-notch fa-spin"></i>
      </span>
    </Container>
  )
}
