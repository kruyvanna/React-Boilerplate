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
      <span class="icon has-text-success">
        <i class="fas fa-3x fa-spinner fa-pulse"></i>
      </span>
    </Container>
  )
}
