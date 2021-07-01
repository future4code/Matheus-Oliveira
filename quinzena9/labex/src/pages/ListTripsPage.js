import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom";
import { API_BASE } from "../constants/labexAPI";
import { Aluno } from "../constants/labexAPI";
import axios from "axios";

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
const HomeButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`

export const ListTripsPage = () => {
  const history = useHistory();
  const [allTrips, setAllTrips] = useState([])

  useEffect(() => {
    axios
      .get(
        `${API_BASE}${Aluno}/trips`
      )
      .then((response) => {
        setAllTrips(response.data.trips)
        console.log(response.data.trips)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const goToApplicationPage = () => {
    history.push("/form");
  };

  return (
    <ListTripPageContainer>
      <HomeButtonContainer>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToApplicationPage}>Inscrever-se</button>
      </HomeButtonContainer>
      <div>
        <h1>Lista de Viagens</h1>
      </div>
      <>
        {allTrips.map(trips => {
          return (
            <ListTripCardContainer>
              <ListTripCardItems>
                Nome: {trips.name}
              </ListTripCardItems>
              <ListTripCardItems>
                Descrição: {trips.description}
              </ListTripCardItems>
              <ListTripCardItems>
                Planeta: {trips.planet}
              </ListTripCardItems>
              <ListTripCardItems>
                Duração: {trips.durationInDays}
              </ListTripCardItems>
              <ListTripCardItems>
                Data: {trips.date}
              </ListTripCardItems>
            </ListTripCardContainer>
          )
        })}
      </>
    </ListTripPageContainer>
  )
}