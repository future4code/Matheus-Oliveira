import React from 'react'
import styled from 'styled-components'
import ChoosePpl from '../../assets/images/svg/chooseppl.svg'
import Settings from '../../assets/images/svg/settings.svg'
import DisplayFlexCenter from '../../themes/display/DisplayFlexCenter'
import IconsChangePageStyle from '../../themes/icons/iconsChangePage/IconsChangePageStyle'

const BackToChoiceSection = styled.div`
  ${DisplayFlexCenter}
  grid-column-start: 1;
  grid-row-start: 1;
`
const SettingsButton = styled.div`
  ${DisplayFlexCenter}
  grid-column-start: 5;
`
const IconsChangePage = styled.img`
    ${IconsChangePageStyle}
`

export default function MatchSectionButton(props) {
  return (
    <>
      <BackToChoiceSection>
        <a  href="/#" onClick={() => props.pageChange("ChoiceSection")}>
          <IconsChangePage
            src={ChoosePpl}>
          </IconsChangePage>
        </a>
      </BackToChoiceSection>
      <SettingsButton>
        <a  href="/#" onClick={() => props.pageChange("SettingSection")}>
          <IconsChangePage
            src={Settings}>
          </IconsChangePage>
        </a>
      </SettingsButton>
    </>
  )
}




