import React from "react"

export const FormInputs = (props) => {
  return (
    <>
      <input
        name="name"
        value={props.form.name}
        onChange={props.onChange}
        placeholder={"Nome"}
        required
        pattern={"^.{3,}"}
        title={"Seu nome deve ter no mínimo 3 caracteres"}
      />
      <input
        name={"age"}
        value={props.form.age}
        onChange={props.onChange}
        placeholder="Idade"
        required
        type={"number"}
        min={18}
      />
      <input
        name="applicationText"
        value={props.form.applicationText}
        onChange={props.onChange}
        placeholder="Texto de Candidatura"
        required
        pattern={"^.{30,}"}
        title={"Seu texto deve ter no mínimo 30 caracteres"}
      />
      <input
        name="profession"
        value={props.form.profession}
        onChange={props.onChange}
        placeholder="Profissão"
        required
        pattern={"^.{10,}"}
        title={"Sua profissão deve ter no mínimo 30 caracteres"}
      />
    </>
  )
}