import React from "react"
import styled from "styled-components"
import useForm from "../../hooks/useForm";
import axios from "axios";
import { CreateTripFormItems } from "./components/CreateTripFormItems";
import { BackButton } from "../../globalComponents/BackButton";
import { useProtectedPage } from "../../sevices/protectPage";

const ApplicationFormPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`
const ApplicationFormItems = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin: 10px;
  }

  select {
    margin: 10px;
  }

	button {
		margin-top: 20px;
	}
`
const HomeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
	align-items: center;
  width: 30vw;
`

export const CreateTripPage = () => {
	useProtectedPage()
	const { form, onChange, cleanFields } = useForm({
		name: "",
		planet: "",
		date: "",
		description: "",
		durationInDays: ""
	})

	const onSubmitCreate = (event) => {
		event.preventDefault();

		const body = {
			name: form.name,
			planet: form.planet,
			date: form.date,
			description: form.description,
			durationInDays: form.durationInDays
		}

		axios
			.post(
				`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus/trips`, body,
				{
					headers: {
						auth: localStorage.getItem("token")
					}
				}
			)
			.then(() => {
				alert("Viagem adicionada com sucesso")
				cleanFields()
			})
			.catch(() => {
				alert("Erro ao criar viagem")
			});
	};

	return (
		<ApplicationFormPageContainer>
			<h1>Criar Viagem</h1>
			<ApplicationFormItems onSubmit={onSubmitCreate}>
				<CreateTripFormItems
					form={form}
					onChange={onChange}
				/>
				<button>Enviar</button>
			</ApplicationFormItems>
			<HomeButtonContainer>
				<BackButton />
			</HomeButtonContainer>
		</ApplicationFormPageContainer>
	)
}