import React from "react"
import { BackButton } from "../../../globalComponents/BackButton"
import styled from "styled-components"

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TripDetail = (props) => {

  return (
    <>
      <TitleContainer>
        <h1>{props.data.name}</h1>
      </TitleContainer>
      <InfoContainer>
        <p>Nome: {props.data.name}</p>
        <p>Descrição: {props.data.description}</p>
        <p>Planeta: {props.data.planet}</p>
        <p>Duração: {props.data.durationInDays}</p>
        <p>Data: {props.data.date}</p>
      </InfoContainer>
      <BackButtonContainer>
        <BackButton />
      </BackButtonContainer>
    </>
  )
}