import axios from "axios";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { API_BASE } from "../constants/labexAPI";
import { Aluno } from "../constants/labexAPI";

export const LoginPage = () => {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    axios
      .post(
        `${API_BASE}${Aluno}/login`, form
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/admhome");
        cleanFields();
      })
      .catch(() => { });
  };

  return (
    <div>
      <form onSubmit={onSubmitLogin}>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder={"E-mail"}
          required
          type="email"
        />
        <input
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          required
        />
        <button>Entrar</button>
      </form>
    </div>
  );
};