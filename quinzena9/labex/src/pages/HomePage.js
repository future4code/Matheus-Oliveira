import React from "react"
import styled from "styled-components"

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
  justify-content: space-between;
  width: 10vw;
`

export default function HomePage() {
  return (
    <HomePageContainer>
      <HomeItemsContainer>
        <h1>LabeX</h1>
        <HomeButtonContainer>
          <button>Ver Viagens</button>
          <button>Área Admin</button>
        </HomeButtonContainer>
      </HomeItemsContainer>
    </HomePageContainer>
  )
}