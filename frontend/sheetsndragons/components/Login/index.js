import React, { useState } from "react";
import styled from "styled-components";
import EmailInput from "components/EmailInput";
import PasswordInput from "components/PasswordInput";
import Button from "components/Button";

const FlexContainer = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  background-color: #EFDEC6;
`;

const ImageContainer = styled.div`
  flex: 0.4;
  background-color: grey;
`

const LoginContainer = styled.div`
  flex: 0.6;
  padding: 20px;
  heigth: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <FlexContainer>
      <ImageContainer>

      </ImageContainer>

      <LoginContainer>
        <EmailInput id="emailInput" label="Email" onChange={setEmail} width="50%"/>
        <PasswordInput id="passwordInput" label="Senha" onChange={setPassword} width="50%"/>
        <Button backgroundColor="primary" onClick={() => { console.log("clicked") }} width="50%">Entrar</Button>
      </LoginContainer>
    </FlexContainer>
  )
}

export default Login;