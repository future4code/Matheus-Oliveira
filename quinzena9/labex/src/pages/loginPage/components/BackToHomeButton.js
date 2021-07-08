import React from "react"
import { useHistory } from "react-router-dom"



export const BackToHomeButton = () => {
  const history = useHistory()

  const backToHome = () => {
    history.push("/")
  }

  return (
    <>
      <button onClick={backToHome}>Voltar</button>
    </>
  )
}