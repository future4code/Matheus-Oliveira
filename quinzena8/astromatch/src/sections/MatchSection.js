import React from 'react'

import styled from 'styled-components'


const MatchPosition = styled.div`
  overflow-y: scroll;
  height: 90%;

  a {
    display: flex;
    align-items: center;  
    margin: 15px;
    height: 70px;
    padding-left: 15px;
    cursor: pointer;
  }

  a:hover {
    background-color: black;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  p {
    padding-left: 10px;
  }
`

export default function MatchSection(props) {

  const renderYourMatch = () => {
    return (
      <>
        <MatchPosition>
          {props.matches.map((match) => (
            <a key={match.id} onClick={() => props.pageChange("ChatSection")}>
              <img
                src={match.photo}
                alt="match photo">
              </img>
              <p>{match.name}</p>
            </a>
          ))}
        </MatchPosition>
      </>

    )
  }
  return (
    <>
      {renderYourMatch()}
    </>
  )
}