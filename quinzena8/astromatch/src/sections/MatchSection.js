import React, { useState, useEffect } from 'react'
import { API_BASE, API_NAME } from '../constants/API_Astromatch'
import axios from 'axios'
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
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios
      .get(`${API_BASE}${API_NAME}/matches`)
      .then(res => { setMatches(res.data.matches) })
      .catch(err => { });
  }, [matches]);

  const renderYourMatch = () => {
    return (
      <>
        <MatchPosition>
          {matches.map((match) => (
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