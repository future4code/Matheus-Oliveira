import React from "react"

export const CreateTripFormItems = (props) => {
  return (
    <>
      <input
					name="name"
					value={props.form.name}
					onChange={props.onChange}
					placeholder={"Nome"}
					required
					pattern={"^.{3,}"}
					title={"O nome da viagem deve ter no mínimo 3 caracteres"}
				/>
				<select name="planet" onChange={props.onChange}>
					<option value= "" disabled selected>Escolha um Planeta</option>
					<option value="Mercúrio">Mercúrio</option>
					<option value="Vênus">Vênus</option>
					<option value="Terra">Terra</option>
					<option value="Marte">Marte</option>
					<option value="Jupiter">Jupiter</option>
					<option value="Saturno">Saturno</option>
					<option value="Urano">Urano</option>
					<option value="Netuno">Netuno</option>
					<option value="Plutão">Plutão</option>
				</select>
				<input
					type="date"
					name="date"
					value={props.form.date}
					onChange={props.onChange}
					required
					title={"É necessário uma data válida"}
				/>
				<input
					name="description"
					value={props.form.description}
					onChange={props.onChange}
					placeholder="Descrição"
					required
					pattern={"^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"}
					title={"Seu texto deve ter no máximo 20 caracteres"}
				/>
				<input
					name={"durationInDays"}
					value={props.form.durationInDays}
					onChange={props.onChange}
					placeholder="Duração em dias"
					required
					type={"number"}
					min={50}
				/>
    </>
  )
}