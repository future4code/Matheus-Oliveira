import React from "react"

export const LoginButtons = (props) => {
  return (
    <>
      <input
          name="email"
          value={props.form.email}
          onChange={props.onChange}
          placeholder={"E-mail"}
          required
          type="email"
        />
        <input
          name="password"
          value={props.form.password}
          onChange={props.onChange}
          placeholder={"Senha"}
          required
        />
    </>
  )
}