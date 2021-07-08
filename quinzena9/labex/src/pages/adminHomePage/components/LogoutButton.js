import React from "react"
import { useHistory } from "react-router-dom"

export const LogoutButton = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.setItem("token", null)
    history.push(`/login`)
  }

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}