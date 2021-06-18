import React, { useState } from 'react'
import ChoiceSection from '../sections/ChoiceSection/ChoiceSection'
import MatchSection from '../sections/MatchSection/MatchSection'
import ChatSection from '../sections/ChatSection/ChatSection'
import SettingSection from '../sections/SettingSection/SettingSection'
import styled from 'styled-components'
import DisplayFlexCenter from '../themes/display/DisplayFlexCenter'
import MainLogoContainer from '../globalComponents/MainLogoContainer'
import ChoiceSectionButton from './components/ChoiceSectionButton'
import MatchSectionButtons from './components/MatchSectionButton'
import ChatSectionButton from './components/ChatSectionButton'
import SettingSectionButton from './components/SettingButton'

const CardPosition = styled.div`
  ${DisplayFlexCenter}
  height: 100vh;
`
const CardSize = styled.div`
  border: 1px solid #c7c7c7;
  box-shadow: 0 0 2em #111;
  border-radius: 4px;
  height: 596px;
  width: 396px;
  background-color: #FFF;
`
const CardHead = styled.div`
  border-bottom: 1px solid #e5e5e5;
  height: 48px;
`
const CardHeadItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

export default function MainCard() {
  const [Page, setPage] = useState("ChoiceSection")

  const pageChange = (page) => {
    setPage(page)
  }

  const renderHead = () => {
    switch (Page) {
      case "ChoiceSection":
        return (
          <>
            <MainLogoContainer />
            <ChoiceSectionButton pageChange={pageChange} />
          </>
        )
      case "MatchSection":
        return (
          <>
            <MainLogoContainer />
            <MatchSectionButtons pageChange={pageChange} />
          </>
        )
      case "ChatSection":
        return (
          <>
            <MainLogoContainer />
            <ChatSectionButton pageChange={pageChange} />
          </>
        )
      case "SettingSection":
        return (
          <>
            <MainLogoContainer />
            <SettingSectionButton pageChange={pageChange}/>
          </>
        )
      default:
        return <h1>Page not found</h1>
    }
  }

  const renderBody = () => {
    switch (Page) {
      case "ChoiceSection":
        return (
          <>
            <ChoiceSection />
          </>
        )
      case "MatchSection":
        return (
          <>
            <MatchSection
              pageChange={pageChange}>
            </MatchSection>
          </>
        )
      case "ChatSection":
        return (
          <>
            <ChatSection />
          </>
        )
      case "SettingSection":
        return (
          <>
            <SettingSection />
          </>
        )
      default:
        return <h1>Page not found</h1>
    }
  }

  return (
    <CardPosition>
      <CardSize>
        <CardHead>
          <CardHeadItems>
            {renderHead()}
          </CardHeadItems>
        </CardHead>
        {renderBody()}
      </CardSize>
    </CardPosition>
  )
}