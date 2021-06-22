import React from "react"
import styled from "styled-components"

const ListTripPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`
const ListTripCardContainer = styled.div`
  background-color: #c4c4c4;
  height: 250px;
  width: 550px;
  margin: 15px;
`
const ListTripCardItems = styled.div`
  padding-top: 25px;
  padding-left: 15px;
`

export default function HomePage() {
  return (
    <ListTripPageContainer>
      <div>
        <button>Voltar</button>
        <button>Inscrever-se</button>
      </div>
      <div>
        <h1>Lista de Viagens</h1>
      </div>
      <ListTripCardContainer>
        <ListTripCardItems>Nome:</ListTripCardItems>
        <ListTripCardItems>Descrição:</ListTripCardItems>
        <ListTripCardItems>Planeta:</ListTripCardItems>
        <ListTripCardItems>Duração:</ListTripCardItems>
        <ListTripCardItems>Data:</ListTripCardItems>
      </ListTripCardContainer>
      <ListTripCardContainer>
        <ListTripCardItems>Nome:</ListTripCardItems>
        <ListTripCardItems>Descrição:</ListTripCardItems>
        <ListTripCardItems>Planeta:</ListTripCardItems>
        <ListTripCardItems>Duração:</ListTripCardItems>
        <ListTripCardItems>Data:</ListTripCardItems>
      </ListTripCardContainer>
      <ListTripCardContainer>
        <ListTripCardItems>Nome:</ListTripCardItems>
        <ListTripCardItems>Descrição:</ListTripCardItems>
        <ListTripCardItems>Planeta:</ListTripCardItems>
        <ListTripCardItems>Duração:</ListTripCardItems>
        <ListTripCardItems>Data:</ListTripCardItems>
      </ListTripCardContainer>
    </ListTripPageContainer>
  )
}