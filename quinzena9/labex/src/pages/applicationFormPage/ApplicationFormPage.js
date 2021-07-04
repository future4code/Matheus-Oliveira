import React, { useState, useEffect } from "react"
import styled from "styled-components"
import useForm from "../../hooks/useForm";
import { API_BASE } from "../../constants/labexAPI";
import { Aluno } from "../../constants/labexAPI";
import axios from "axios";
import { SelectCountry } from "./components/SelectCountry";
import { BackButton } from "../../globalComponents/BackButton";
import { SelectMapTrip } from "./components/SelectMapTrip";
import { FormInputs } from "./components/FormInputs";

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
`
const BackButtonContainer = styled.div`
  display: flex;
  justify-content: center;
	align-items: center;
  width: 30vw;
`

export const ApplicationFormPage = () => {
  const [allTrips, setAllTrips] = useState([])
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    tripId: ""
  })

  useEffect(() => {
    axios
      .get(
        `${API_BASE}${Aluno}/trips`
      )
      .then((response) => {
        setAllTrips(response.data.trips)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  const onSubmitApply = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }

    axios
      .post(
        `${API_BASE}${Aluno}/trips/${form.tripId}/apply`, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      .then(() => {
        cleanFields();
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  };

  return (
    <ApplicationFormPageContainer>
      <h1>Inscreva-se para uma viagem</h1>
      <ApplicationFormItems onSubmit={onSubmitApply}>
        <SelectMapTrip
          allTrips={allTrips}
          onChange={onChange}
          form={form}
        />
        <FormInputs
          onChange={onChange}
          form={form}
        />
        <SelectCountry onChange={onChange} />
          <button>Enviar</button>
      </ApplicationFormItems>
      <BackButtonContainer>
        <BackButton />
      </BackButtonContainer>
    </ApplicationFormPageContainer>
  )
}