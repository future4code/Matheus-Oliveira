import React from 'react'
import styled from 'styled-components'
import AstromatchLogo from '../assets/images/astromatchlogo.png'

const CardPosition = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const CardSize = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    height: 400px;
    width: 265px;
    background-color: #FFF;
`
const CardHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;

    img {
      height: 30px;
      width: 100px;
    }
`

export default function MainCard() {
  return (
    <CardPosition>
      <CardSize>
        <CardHead>
          <img src={AstromatchLogo} />
        </CardHead>
      </CardSize>
    </CardPosition>
  )
}