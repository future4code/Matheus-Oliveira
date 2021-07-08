import React from "react"
import { useHistory } from "react-router-dom"

export const CreateTripButton = () => {
  const history = useHistory();

  const goToCreateTrip = () => {
    history.push(`/admin/trips/create`)
  }

  return (
    <>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
    </>
  )
}