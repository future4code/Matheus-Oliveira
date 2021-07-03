import React, { useState, useEffect } from "react"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

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

export const TripDetailsPage = () => {
  useProtectedPage();
  const pathParams = useParams()
  const [trip, setTrip] = useState({})

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus/trip/${pathParams.id}`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        setTrip(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, [trip]);


  return (
    <div>
      {trip.trip.name}
    </div>
  )
};
