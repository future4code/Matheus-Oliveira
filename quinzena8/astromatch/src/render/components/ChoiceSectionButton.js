import React from 'react'
import styled from 'styled-components'
import ChatBalloon from '../../assets/images/svg/chatballoon.svg'
import DisplayFlexCenter from '../../themes/display/DisplayFlexCenter'
import IconsChangePageStyle from '../../themes/icons/iconsChangePage/IconsChangePageStyle'

const ChangePageIcon = styled.div`
  ${DisplayFlexCenter}
  grid-column-start: 5;
`
const IconsChangePage = styled.img`
    ${IconsChangePageStyle}
`

export default function ChoiceSectionButton(props) {
  return (
      <ChangePageIcon>
        <a onClick={() => props.pageChange("MatchSection")}>
          <IconsChangePage
            src={ChatBalloon}>
          </IconsChangePage>
        </a>
      </ChangePageIcon>
  )
}