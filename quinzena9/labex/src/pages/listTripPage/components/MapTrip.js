import React from "react"
import styled from "styled-components"

const ListTripCardContainer = styled.div`
  box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 10px 0px;
  max-width: 500px;
  width: 100%;

  b {
    color: #708090;
  }
`
const ListTripCardItems = styled.div`
  padding-top: 25px;
  padding-left: 15px;
`

export const MapTrip = (props) => {
  return (
    <>
      {props.allTrips.map(trips => {
        return (
          <ListTripCardContainer key={trips.id}>
            <ListTripCardItems>
              <b>Nome:</b> {trips.name}
            </ListTripCardItems>
            <ListTripCardItems>
              <b>Descrição:</b> {trips.description}
            </ListTripCardItems>
            <ListTripCardItems>
              <b>Planeta:</b> {trips.planet}
            </ListTripCardItems>
            <ListTripCardItems>
              <b>Duração:</b> {trips.durationInDays}
            </ListTripCardItems>
            <ListTripCardItems>
              <b>Data:</b> {trips.date}
            </ListTripCardItems>
          </ListTripCardContainer>
        )
      })}
    </>
  )
}