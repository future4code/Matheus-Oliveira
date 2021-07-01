import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      console.log("Não está logado!!!");
      history.push("/login");
    }
  }, []);
};

export const TripDetailsPage = () => {
  useProtectedPage();
  const pathParams = useParams()

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus/trip/${pathParams.id}`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log(response.data)
        console.log(pathParams)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);
  return <div>Detalhes da viagem!</div>;
};
