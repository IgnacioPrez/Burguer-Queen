import React from "react";
import styled from "styled-components";
import { GrInstagram, GrFacebook } from "react-icons/gr";

const Footer = () => {
  return (
    <ContainerFoot>
      <a href="https://www.instagram.com/burger.queen96/" >
        <GrInstagram />
      </a>
      <a href="https://www.facebook.com/MicaMartinez1796">
        <GrFacebook />
      </a>
    </ContainerFoot>
  );
};

export default Footer;

const ContainerFoot = styled.footer`
  @media screen and (min-width: 320px) {
    margin-top: 5em;
    width: 100%;
    height: 7em;
    background-color: #0D0D0D;

    display: flex;

  }
  svg {
    cursor: pointer;
    padding: 1em;
    color: #fff;
    font-size: xx-large;
  }
  
`;
