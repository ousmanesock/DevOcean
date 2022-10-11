import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  let email = sessionStorage.getItem("user");
  return (
    <Wrapper>{email && <SignInLink to="/login">Sign In</SignInLink>}</Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: blue;
  height: 10vh;
`;

const SignInLink = styled(Link)`
  color: springgreen;
  border: 1px solid springgreen;
  text-decoration: none;
  padding: 10px 20px;
  margin: 10px;
`;
