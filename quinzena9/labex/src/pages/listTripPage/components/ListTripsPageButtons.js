import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

const ButtonStyle = styled.button`
  margin: 0 15px;
`

export const ListTripsPageButtons = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goToApplyPage = () => {
    history.push("/trips/application")
  }

  return (
    <>
      <ButtonStyle onClick={goBack}>Voltar</ButtonStyle>
      <ButtonStyle onClick={goToApplyPage}>Inscrever-se</ButtonStyle>
    </>
  )
}