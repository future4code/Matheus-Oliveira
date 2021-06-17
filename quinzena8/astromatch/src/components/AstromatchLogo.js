import React from 'react'
import styled from 'styled-components'
import logoAstromatch from '../assets/images/png/astromatchlogo.png'
import WebkitUserSelect from '../themes/webkit/WebkitUserSelect'

const Logo = styled.img`
  height: 48px;
  width: 148px;
  ${WebkitUserSelect}
  `

export default function AstromatchLogo() {
  return (
    <>
      <Logo src={logoAstromatch} alt="Astromatch Logo"></Logo>
    </>
  )
}