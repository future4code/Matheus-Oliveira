import React from 'react'
import styled from 'styled-components'

const MatchBox = styled.a`
  display: flex;
  align-items: center;  
  margin: 15px;
  height: 70px;
  padding-left: 15px;
  cursor: pointer;

  &:hover {
  background-color: #e5e5e5;
  }
`
const MatchIconImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
const MatchName = styled.p`
  padding-left: 10px;
`

export default function ListMatches(props) {
  return (
    <>
      {props.matches.map((match) => (
        <MatchBox key={match.id} onClick={() => props.pageChange("ChatSection")}>
          <MatchIconImage
            src={match.photo}
            alt="match photo">
          </MatchIconImage>
          <MatchName>{match.name}</MatchName>
        </MatchBox>
      ))}
    </>
  )
}