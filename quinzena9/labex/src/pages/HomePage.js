import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

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

export const HomePage = () => {
  const history = useHistory();

  const goToTripPage = () => {
    history.push("/trips/list")
  };

  const goToAdminPage = () => {
    history.push("/login")
  };

  return (
    <HomePageContainer>
      <HomeItemsContainer>
        <h1>LabeX</h1>
        <HomeButtonContainer>
          <button onClick={goToTripPage}>Ver Viagens</button>
          <button onClick={goToAdminPage}>Área Admin</button>
        </HomeButtonContainer>
      </HomeItemsContainer>
    </HomePageContainer>
  )
}