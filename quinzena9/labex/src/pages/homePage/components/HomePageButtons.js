import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components";

const ButtonStyle = styled.button`
  margin: 0 15px;
`

export const HomePageButtons = () => {
  const history = useHistory();

  const goToTripPage = () => {
    history.push("/trips/list")
  };

  const goToAdminPage = () => {
    history.push("/login")
  };

  return (
    <>
      <ButtonStyle onClick={goToTripPage}>Ver Viagens</ButtonStyle>
      <ButtonStyle onClick={goToAdminPage}>Área Admin</ButtonStyle>
    </>
  )
}