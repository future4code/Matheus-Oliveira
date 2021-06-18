import React, { useState, useEffect } from 'react'
import { API_BASE, API_NAME } from '../../constants/API_Astromatch'
import axios from 'axios'

export default function SettingSection() {
  const [reset, setReset] = useState(null)

  useEffect(() => {
    if(reset !== null) {
      if (window.confirm("Você realmente quer resetar todos seus matches?")) {
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
    <button onClick={resetTrue}></button>
  </>
)
}