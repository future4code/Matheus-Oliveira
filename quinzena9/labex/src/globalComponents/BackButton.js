import React from "react"
import { useHistory } from "react-router-dom"

export const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return (
    <>
      <button onClick={goBack}>Voltar</button>
    </>
  )
}