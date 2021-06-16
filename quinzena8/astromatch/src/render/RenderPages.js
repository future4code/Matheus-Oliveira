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
import AstromatchLogo from '../components/AstromatchLogo'

const CardPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const CardSize = styled.div`
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  height: 596px;
  width: 396px;
  background-color: #FFF;
`
const CardHead = styled.div`
  border-bottom: 1px solid #d3d3d3;
  height: 48px;
`
const CardHeadItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`
const HeadGhostItem = styled.div`
  height: 24px;
  width: 30px;
`
const IconsChangePage = styled.img`
  height: 30px;
  padding-top: 5px;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;

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
            <HeadGhostItem />
            <AstromatchLogo />
            <a onClick={() => pageChange("MatchSection")}>
              <IconsChangePage
                src={ChatBalloon}>
              </IconsChangePage>
            </a>
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
            <AstromatchLogo />
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
              </IconsChangePage></a>
            <AstromatchLogo />
            <HeadGhostItem />
          </>
        )
      case "SettingSection":
        return (
          <>
            <a onClick={() => pageChange("MatchSection")}>
              <IconsChangePage
                src={BackArrow}>
              </IconsChangePage></a>
            <AstromatchLogo />
            <HeadGhostItem />
          </>
        )
      default:
        return <h1>Page not found</h1>
    }
  }

  const renderPage = () => {
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
        {renderPage()}
      </CardSize>
    </CardPosition>
  )
}