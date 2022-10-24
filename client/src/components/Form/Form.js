import React, { useState } from "react";
import styled from "styled-components";

const Form = ({ formData, handleChange, handleSubmit }) => (
	<FormBody onSubmit={handleSubmit}>
		<h3>Login</h3>

		<Input
			name="email"
			type="text"
			placeholder="Email"
			onChange={(event) => handleChange(event.target.value, "email")}
		/>

		<Input
			name="password"
			type="password"
			placeholder="Password"
			onChange={(event) => handleChange(event.target.value, "password")}
		/>
		<Button type="submit" formData={formData}>
			Submit
		</Button>
	</FormBody>
);

export default Form;

const FormBody = styled.form``;
const Input = styled.input`
  padding: 12px 20px;
  margin: 5px;
`;
const Button = styled.button`
  height: 45px;
  width: 120px;
  padding: 12px;
  background: linear-gradient(to top right, white, #2a11ff);
  color: white;
  border: 1px solid blue;
  border-radius: 4px;
`;
