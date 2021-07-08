import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../../constants/labexAPI";
import { Aluno } from "../../constants/labexAPI";
import { BackButton } from "../../globalComponents/BackButton";
import { CreateTripButton } from "./components/CreateTripButton";
import { LogoutButton } from "./components/LogoutButton";
import { TripList } from "./components/TripList";
import { useProtectedPage } from "../../sevices/protectPage";
import styled from "styled-components";

const AdminPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 10px 0px;
`

export const AdminHomePage = () => {
  useProtectedPage()
  const [allTrips, setAllTrips] = useState([])
  const [loading, setloading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    axios
      .get(
        `${API_BASE}${Aluno}/trips`
      )
      .then((res) => {
        setAllTrips(res.data.trips)
        setloading(false)
      })
      .catch(() => {
        alert("Erro ao carregar viagens")
      });
  }, [allTrips]);

  const goToSelectedTripPage = (id) => {
    history.push(`/details/${id}`)
  }

  const DeleteTrip = (id, name) => {
    if (window.confirm(`Tem certeza que deseja deletar a viagem ${name}?`)) {

      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus/trips/${id}`,
          {
            headers: {
              auth: localStorage.getItem("token")
            }
          }
        )
        .then(() => {
          alert("Viagem deletada com sucesso!")
        })
        .catch(() => {
          alert("Erro ao deletar viagem")
        })
    }
  }

  return (
    <AdminPageContainer>
      <h1>Painel Administrativo</h1>
      <ButtonsContainer>
        <BackButton />
        <CreateTripButton />
        <LogoutButton />
      </ButtonsContainer>
      <TripList
        allTrips={allTrips}
        loading={loading}
        goToSelectedTripPage={goToSelectedTripPage}
        DeleteTrip={DeleteTrip}
      />
    </AdminPageContainer>
  )
}
