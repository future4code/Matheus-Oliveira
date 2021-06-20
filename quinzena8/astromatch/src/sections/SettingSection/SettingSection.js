import React, { useState, useEffect } from 'react'
import { API_BASE, API_NAME } from '../../constants/API_Astromatch'
import axios from 'axios'
import styled from 'styled-components'
import DisplayFlexCenter from '../../themes/display/DisplayFlexCenter'
import WebkitUserSelect from '../../themes/webkit/WebkitUserSelect'

const WrapButton = styled.div`
  ${DisplayFlexCenter}
  height: 90%;
`
const StyledButton = styled.a`
  ${DisplayFlexCenter}
  ${WebkitUserSelect}
  cursor: pointer;
  background-color: #E02130;
  height: 50px;
  padding: 10px 30px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color  : #B90504;
  }
`

export default function SettingSection() {
  const [reset, setReset] = useState(null)

  useEffect(() => {
    if (reset !== null) {
      if (window.confirm("Você realmente deseja resetar todos seus matches?")) {
        axios
          .put(`${API_BASE}${API_NAME}/clear`)
          .then(() => { })
          .catch(() => { })
      }
    }
  }, [reset]);

  const resetTrue = () => {
    setReset(true)
  }

  return (
    <>
      <WrapButton>
        <StyledButton onClick={resetTrue}>
          resetar matches
        </StyledButton>
      </WrapButton>
    </>
  )
}