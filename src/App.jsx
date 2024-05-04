import React from "react";
import styled from "styled-components";
import { FaWhatsapp, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import img from "./assets/andre.png";
import { Container, ContainerImg } from "./AppStyle";

// Componentes estilizados para os ícones
const FacebookIcon = styled(FaFacebookSquare)`
  color: #3b5998; 
`;

const WhatsappIcon = styled(FaWhatsapp)`
  color: #25d366; 
`;

const EmailIcon = styled(MdEmail)`
  color: #ea4335; 
`;

function App() {
  return (
    <Container>
      <ContainerImg>
        <img src={img} alt="" />
      </ContainerImg>
      <h1>Andre Luiz Alves </h1>
      <p>Redes Sociais</p>
      <ul>
        <li>
          <a href="#">
            <FacebookIcon />
            FaceBook
          </a>
        </li>
        <li>
          <a href="#">
            <WhatsappIcon />
            Whatsapp
          </a>
        </li>
        <li>
          <a href="#">
            <EmailIcon />
            Email
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default App;
