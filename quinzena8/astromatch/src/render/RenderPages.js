import React, { useState } from 'react'
import ChoiceSection from '../sections/ChoiceSection'
import MatchSection from '../sections/MatchSection'
import ChatSection from '../sections/ChatSection'
import SettingSection from '../sections/SettingSection'
import styled from 'styled-components'
import ChatBalloon from '../assets/images/svg/chatballoon.svg'
import ChoosePpl from '../assets/images/svg/chooseppl.svg'
import Settings from '../assets/images/svg/settings.svg'
import BackArrow from '../assets/images/svg/backarrow.svg'
import DisplayFlexCenter from '../themes/display/DisplayFlexCenter'
import WebkitUserSelect from '../themes/webkit/WebkitUserSelect'
import MainLogoContainer from '../components/MainLogoContainer'

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
const IconsChangePage = styled.img`
  height: 30px;
  padding-top: 5px;
  transition: 200ms;
  cursor: pointer;
  ${WebkitUserSelect}

  &:hover {
    height: 35px;
  }
`
const ChangePageIcon = styled.div`
  ${DisplayFlexCenter}
  grid-column-start: 5;
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
            <ChangePageIcon>
              <a onClick={() => pageChange("MatchSection")}>
                <IconsChangePage
                  src={ChatBalloon}>
                </IconsChangePage>
              </a>
            </ChangePageIcon>
          </>
        )
      case "MatchSection":
        return (
          <>
            <a onClick={() => pageChange("ChoiceSection")}>
              <IconsChangePage
                src={ChoosePpl}>
              </IconsChangePage>
            </a>

            <MainLogoContainer />

            <a onClick={() => pageChange("SettingSection")}>
              <IconsChangePage
                src={Settings}>
              </IconsChangePage>
            </a>
          </>
        )
      case "ChatSection":
        return (
          <>
            <a onClick={() => pageChange("MatchSection")}>
              <IconsChangePage
                src={BackArrow}>
              </IconsChangePage>
            </a>

            <MainLogoContainer />

          </>
        )
      case "SettingSection":
        return (
          <>
            <a onClick={() => pageChange("MatchSection")}>
              <IconsChangePage
                src={BackArrow}>
              </IconsChangePage>
            </a>

            <MainLogoContainer />

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