import React from "react"
import styled from "styled-components"
import { HomePageButtons } from "./components/HomePageButtons"

const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const HomeItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
const HomeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 25vw;
`

export const HomePage = () => {
  return (
    <HomePageContainer>
      <HomeItemsContainer>
        <h1>LabeX</h1>
        <HomeButtonContainer>
          <HomePageButtons />
        </HomeButtonContainer>
      </HomeItemsContainer>
    </HomePageContainer>
  )
}