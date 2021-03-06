import React, { useState, useEffect } from 'react'
import { API_BASE, API_NAME } from '../../constants/API_Astromatch'
import axios from 'axios'
import styled from 'styled-components'
import LoadingSpin from './components/LoadingSpin'
import ListMatches from './components/ListMatches'
import WebkitUserSelect from '../../themes/webkit/WebkitUserSelect'
import ScrollStyle from '../../themes/scroll.js/ScrollStyle'

const MatchPosition = styled.div`
  overflow-y: scroll;
  height: 90%;
  ${WebkitUserSelect}
  ${ScrollStyle}
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
      .catch(err => { alert("Erro", err.data) });
  }, [matches]);

  const renderYourMatch = () => {
    return (
      <>
        <MatchPosition>
          {loading ? <LoadingSpin /> : (
            <>
              <ListMatches matches={matches}
                pageChange={props.pageChange} />
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