import React from "react"

export const MapApprovedCandidates = (props) => {

  return (
    <>
      {props.data.approved.map(res => {
        return (
          <div key={res.id}>
            <p >{res.name}</p>
          </div>
        )
      })}
    </>
  )
}