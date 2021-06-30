import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom";
import { TripDetails } from "./TripDetailsPage";
import axios from "axios";

const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      console.log("Não está logado!!!");
      history.push("/login");
    }
  }, []);
};

export const AdminHomePage = () => {
  useProtectedPage();
  const [allTrips, setAllTrips] = useState([])
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus/trips"
      )
      .then((response) => {
        console.log(response.data);
        setAllTrips(response.data.trips)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  const handleTripButton = () => {
    history.push("/details");
  }

  return (
    <>
      <h1>Painel Administrativo</h1>
      <div>
        {allTrips.map(trips => {
          return (
            <div>
              <button onClick={() => handleTripButton(trips)}>{trips.name}</button>
            </div>
          )
        })}
      </div>
    </>
  )
}
