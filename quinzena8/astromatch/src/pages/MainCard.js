import React, { useState } from 'react'
import MatchPage from '../components/MatchPage'
import YourMatch from '../components/YourMatch'
import styled from 'styled-components'
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
  const [Page, setPage] = useState("MatchPage")

  const pageChange = (page) => {
    setPage(page)
  }

  const renderHead = () => {
    switch (Page) {
      case "MatchPage":
        return (
          <>
            <HeadGhostItem />
            <img src={AstromatchLogo} />
            <button onClick={() => pageChange("YourMatch")}>1</button>
          </>
        )
      case "YourMatch":
        return (
          <>
            <button onClick={() => pageChange("MatchPage")}>2</button>
            <img src={AstromatchLogo} />
            <HeadGhostItem />
          </>
        )
      default:
        return <h1>Page not found</h1>
    }
  }

  const renderPage = () => {
    switch (Page) {
      case "MatchPage":
        return (
          <>
            <MatchPage></MatchPage>
          </>
        )
      case "YourMatch":
        return (
          <>
            <YourMatch></YourMatch>
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