import axios from "axios"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { API_BASE } from "../../constants/labexAPI";
import { Aluno } from "../../constants/labexAPI";
import { LoginButtons } from "./components/LoginButtons";
import { BackToHomeButton } from "./components/BackToHomeButton";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

export const LoginPage = () => {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
  const history = useHistory();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    axios
      .post(
        `${API_BASE}${Aluno}/login`, form
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        history.push("/admin/trips/list")
        cleanFields();
      })
      .catch(() => { })
  }

  return (
    <LoginPageContainer>
      <h1>Login</h1>
      <form onSubmit={onSubmitLogin}>
        <LoginButtons
          form={form}
          onChange={onChange}
        />
        <button>Entrar</button>
      </form>
      <BackToHomeButton />
    </LoginPageContainer>
  );
};