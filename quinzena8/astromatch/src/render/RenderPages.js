import React, { useState, useEffect } from 'react'
import ChoiceSection from '../sections/ChoiceSection'
import MatchSection from '../sections/MatchSection'
import ChatSection from '../sections/ChatSection'
import SettingSection from '../sections/SettingSection'
import styled from 'styled-components'
import axios from 'axios'
import { API_BASE, API_NAME } from '../constants/API_Astromatch'
import AstromatchLogo from '../assets/images/astromatchlogo.png'

const CardPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const CardSize = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  height: 596px;
  width: 396px;
  background-color: #FFF;
`
const CardHead = styled.div`
  border-bottom: 1px solid #d3d3d3;
  height: 48px;

  img {
    height: 48px;
    width: 148px;
  }
`
const CardHeadItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`
const HeadGhostItem = styled.div`
  height: 24px;
  width: 23px;
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
            <img src={AstromatchLogo} alt="Astromatch Logo" />
            <button onClick={() => pageChange("MatchSection")}>1</button>
          </>
        )
      case "MatchSection":
        return (
          <>
            <button onClick={() => pageChange("ChoiceSection")}>2</button>
            <img src={AstromatchLogo} alt="Astromatch Logo" />
            <button onClick={() => pageChange("SettingSection")}>4</button>
          </>
        )
      case "ChatSection":
        return (
          <>
            <button onClick={() => pageChange("MatchSection")}>3</button>
            <img src={AstromatchLogo} alt="Astromatch Logo" />
            <HeadGhostItem />
          </>
        )
      case "SettingSection":
        return (
          <>
            <button onClick={() => pageChange("MatchSection")}>5</button>
            <img src={AstromatchLogo} alt="Astromatch Logo" />
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
            <ChoiceSection></ChoiceSection>
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