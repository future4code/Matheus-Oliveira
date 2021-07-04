import { useHistory } from "react-router"
import { useEffect } from "react";

export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token === null) {
      history.push("/login")
    }
  }, [history])
}