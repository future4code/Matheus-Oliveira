import React from 'react'
import styled from 'styled-components'
import logoAstromatch from '../assets/images/png/astromatchlogo.png'

const Logo = styled.img`
  height: 48px;
  width: 148px;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  `

export default function AstromatchLogo() {
  return (
    <>
      <Logo src={logoAstromatch} alt="Astromatch Logo"></Logo>
    </>
  )
}