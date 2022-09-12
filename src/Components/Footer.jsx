import React from "react";
import { GrInstagram, GrFacebook } from "react-icons/gr";
import { ContainerFoot } from "./everyComponents";

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


