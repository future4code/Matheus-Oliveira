import React from "react"

export const SelectMapTrip = (props) => {
  return (
    <>
      <select name="tripId" value={props.form.tripId} onChange={props.onChange}>
        <option value= "" disabled selected>Escolha uma Viagem</option>
        {props.allTrips.map(trips => {
          return (
            <option key={trips.id} value={trips.id}>{trips.name}</option>
          )
        })}
      </select>
    </>
  )
}