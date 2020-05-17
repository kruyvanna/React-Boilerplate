import React, { useState } from 'react'
import styled from 'styled-components'

import { DeleteConfirmButton } from '../DeleteConfirmButton'

const LeftBox = styled.section`
  width: 100px;
  height: 100px;
  background-color: #999;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const RightBox = styled.section`
  margin-left: 20px;
`

const ProgressBar = styled.progress`
  width: 100px;
  height: 7px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`

export const ImageUploadUI = ({
  status,
  image,
  onChoosePhotoClick,
  progress,
  onDeleteConfirm
}) => {
  function renderLeftContent() {
    if (status === 'initial') {
      return (
        <span className="icon is-large">
          <i className="fa fa-3x fa-image"></i>
        </span>
      )
    } else {
      return <Image src={image} alt="" />
    }
  }

  function renderRightContent() {
    if (status === 'initial') {
      return (
        <button onClick={onChoosePhotoClick} type="button" className="button">
          Choose photo
        </button>
      )
    }
    if (status === 'uploading') {
      return (
        <ProgressBar
          className="progress is-primary"
          value={progress}
          max="100"
        ></ProgressBar>
      )
    }
    if (status === 'uploaded') {
      return (
        <DeleteConfirmButton onConfirm={onDeleteConfirm}></DeleteConfirmButton>
      )
    }
  }

  return (
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <LeftBox>{renderLeftContent()}</LeftBox>
        </div>
        <div className="level-item">
          <RightBox>{renderRightContent()}</RightBox>
        </div>
      </div>
    </div>
  )
}
