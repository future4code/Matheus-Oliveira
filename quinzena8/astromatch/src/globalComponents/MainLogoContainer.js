import React from 'react'
import styled from 'styled-components'
import AstromatchLogo from './AstromatchLogo'
import DisplayFlexCenter from '../themes/display/DisplayFlexCenter'

const MainLogoPosition = styled.div`
  ${DisplayFlexCenter}
  grid-column-start: 3;
`

export default function MainLogoContainer() {
  return (
    <>
      <MainLogoPosition>
        <AstromatchLogo />
      </MainLogoPosition>
    </>
  )
}