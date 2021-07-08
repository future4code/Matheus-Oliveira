import React from "react"
import styled from "styled-components"
import DeleteImg from "../../../assets/garbage.svg"

const TripContainer = styled.div`
  display: flex;
  box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 10px 0px;
  align-items: center;
  justify-content: space-between;
  width: 460px;

  &:hover {
    cursor: pointer;
    background-color: #B6D4E3;
  }
`

const SelectedTrip = styled.div`
  width: 100%;
`

const DeleteButton = styled.div`


&:hover {
  border-radius: 50%;
  background-color: #BA2F43;
}

img {
    height: 32px;
    width: 40px;
  }
`

export const TripList = (props) => {

  return (
    <>
      <div>
        {props.allTrips === null || props.loading ? <div>Carregando...</div> : (
          <>
            {props.allTrips.map(trips => {
              return (
                <TripContainer key={trips.id}>
                  <SelectedTrip
                    onClick={() => props.goToSelectedTripPage(trips.id)}>
                    <p>{trips.name}</p>
                  </SelectedTrip>
                  <DeleteButton
                    onClick={() => props.DeleteTrip(trips.id, trips.name)}>
                    <img src={DeleteImg}></img>
                  </DeleteButton>
                </TripContainer>
              )
            })}
          </>
        )}
      </div>
    </>
  )
}