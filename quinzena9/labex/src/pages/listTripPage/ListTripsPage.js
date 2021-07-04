import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { API_BASE } from "../../constants/labexAPI";
import { Aluno } from "../../constants/labexAPI";
import axios from "axios";
import { ListTripsPageButtons } from "./components/ListTripsPageButtons";
import { MapTrip } from "./components/MapTrip";

const ListTripPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`
const HomeButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding-top: 50px;
`

export const ListTripsPage = () => {
  const [allTrips, setAllTrips] = useState([])

  useEffect(() => {
    axios
      .get(
        `${API_BASE}${Aluno}/trips`
      )
      .then((response) => {
        setAllTrips(response.data.trips)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  return (
    <ListTripPageContainer>
      <HomeButtonContainer>
        <ListTripsPageButtons />
      </HomeButtonContainer>
      <div>
        <h1>Lista de Viagens</h1>
      </div>
      <>
        <MapTrip allTrips={allTrips}/>
      </>
    </ListTripPageContainer>
  )
}