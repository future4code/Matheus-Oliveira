import React from "react"
import styled from "styled-components"

const ButtonsContainer = styled.div`
display: flex;
justify-content: space-around;
width: 500px;
margin: 10px 0px;
`

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  margin: 10px 0px;
`

export const MapPendingCandidates = (props) => {

  return (
    <>
      {props.candidates.map(pending => {
        return (
          <div key={pending.id}>
            <p>{pending.name}, {pending.age}, {pending.profession}</p>
            <p>País: {pending.country}</p>
            <p>Texto: {pending.applicationText}</p>
            <ButtonsContainer>
              <ButtonStyle
                onClick={() => props.decideCandidate(true, pending.id)}>
                Aprovar
              </ButtonStyle>
              <ButtonStyle
                onClick={() => props.decideCandidate(false, pending.id)}>
                Reprovar
              </ButtonStyle>
            </ButtonsContainer>
          </div>
        )
      })}
    </>
  )
}