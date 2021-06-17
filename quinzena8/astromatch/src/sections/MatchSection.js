import React, { useState, useEffect } from 'react'
import { API_BASE, API_NAME } from '../constants/API_Astromatch'
import axios from 'axios'
import styled from 'styled-components'
import LoadingSpin from '../components/LoadingSpin'
import ListMatches from '../components/ListMatches'

const MatchPosition = styled.div`
  overflow-y: scroll;
  height: 90%;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #762D93;
  }
`

export default function MatchSection(props) {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${API_BASE}${API_NAME}/matches`)
      .then(res => {
        setMatches(res.data.matches)
        setLoading(false)
      })
      .catch(err => { });
  }, [matches]);

  const renderYourMatch = () => {
    return (
      <>
        <MatchPosition>
          {loading ? <LoadingSpin /> : (
            <>
              <ListMatches matches={matches}
              pageChange={props.pageChange}/>
            </>
          )}</MatchPosition>
      </>
    )
  }

  return (
    <>
      {renderYourMatch()}
    </>
  )
}