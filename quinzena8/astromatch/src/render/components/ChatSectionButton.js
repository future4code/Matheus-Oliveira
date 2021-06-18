import React from 'react'
import styled from 'styled-components'
import BackArrow from '../../assets/images/svg/backarrow.svg'
import DisplayFlexCenter from '../../themes/display/DisplayFlexCenter'
import IconsChangePageStyle from '../../themes/icons/iconsChangePage/IconsChangePageStyle'

const BackToMatchSection = styled.div`
  ${DisplayFlexCenter}
  grid-column-start: 1;
  grid-row-start: 1;
`
const IconsChangePage = styled.img`
    ${IconsChangePageStyle}
`

export default function ChoiceSectionButton(props) {
  return (
      <BackToMatchSection>
        <a onClick={() => props.pageChange("MatchSection")}>
          <IconsChangePage
            src={BackArrow}>
          </IconsChangePage>
        </a>
      </BackToMatchSection>
  )
}