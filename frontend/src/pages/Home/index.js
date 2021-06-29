import React from "react";

import WelcomeImg from "../../assets/welcome.svg";

import { Container, Content } from "./styles";

const Home = () => {
  return (
    <Container>
      <Content>
        <span>Olá, seja bem-vindo<br/>Aqui você gerencia seus profissionais e profissões</span>
        <img src={WelcomeImg} alt="welcome"/>
      </Content>
    </Container>
  );
}

export { Home };