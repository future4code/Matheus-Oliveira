import React, { useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router";
import { useProtectedPage } from "../../sevices/protectPage";
import { TripDetail } from "./components/TripDetail";
import { MapPendingCandidates } from "./components/MapPendingCandidates";
import { MapApprovedCandidates } from "./components/MapApprovedCandidates";
import styled from "styled-components";

const DetailPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

export const TripDetailsPage = () => {
  useProtectedPage();
  const pathParams = useParams()
  const [data, setdata] = useState({})
  const [candidates, setCandidates] = useState([])
  const [loading, setloading] = useState(true)

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
      .then((res) => {
        setdata(res.data.trip)
        setCandidates(res.data.trip.candidates)
        setloading(false)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, [pathParams.id, candidates]);

  const decideCandidate = (value, id) => {

    const body = {
      approve: value
    }

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus/trips/${pathParams.id}/candidates/${id}/decide`, body,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then(() => {
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }

  return (
    <DetailPageContainer>
      {loading ? <div>Carregando...</div> : (
        <>
          <div>
            <TripDetail data={data} />
          </div>
          <h3>Candidatos Pendentes</h3>
          <MapPendingCandidates
            candidates={candidates}
            decideCandidate={decideCandidate}
          />
          <h3>Candidatos Aprovados</h3>
          <MapApprovedCandidates
            data={data}
          />
        </>
      )}
    </DetailPageContainer>
  )
};
