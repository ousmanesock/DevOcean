import { useState } from "react";
import styled from "styled-components";
import Form from "./Form";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [homeData, setHomeData] = useState(null);

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("/workspace/addUser", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(sessionStorage.setItem("user", formData.email));
    fetch("/workspaces")
      .then((res) => res)
      .then((data) => {
        console.log(data);
        setHomeData(data);
      });
  };

  return (
    <Wrapper>
      <>
        <Form
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f6f7fc;
  border-radius: 4px;
  box-shadow: 0 60px 120px rgba(71, 69, 123, 0.24),
    0 15px 35px rgba(71, 69, 123, 0.24);
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 70vh;
  align-items: center;
`;

export default Login;
