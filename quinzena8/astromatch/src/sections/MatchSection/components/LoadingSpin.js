import React from 'react'
import styled, {keyframes} from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 210px;
`

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`
const LoadingMessage = styled.div`
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #762D93;
  height: 50px;
  width: 50px;
  animation: ${spin} 500ms linear infinite;
`

export default function LoadingSpin() {
  return (
    <>
      <LoadingContainer>
        <LoadingMessage />
      </LoadingContainer>
    </>
  )
}