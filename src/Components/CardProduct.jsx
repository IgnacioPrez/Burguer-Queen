import { burguerProductos } from "../products/product";
import styled from "styled-components";
import iconCard from "../assets/img/icons8-burguer-96.png";
const CardProduct = () => {
  return (
    <CardContainer>
      {burguerProductos.map((burguer, index) => {
        return (
          <Card key={index}>
            <CardTittle>
              <img src={iconCard} alt="Icono card" />
              <h3>{burguer.name}</h3>
              <h4>{`Precio: $${burguer.price}`}</h4>
              <ContainerButton>
                  <Button>Agregar</Button>
              </ContainerButton>
            </CardTittle>
            <CardInfo>
              <img src={burguer.img} alt={burguer.name} />
{/*               <div id="contenedor">{burguer.ingredient.map((ingre)=> (
              <p>{ingre}</p>))}</div> */}
              {/* <p>{`Ingredientes: ${burguer.ingredient.join(' ')}`}</p> */}

            </CardInfo>
          </Card>
        );
      })}
      {console.log(burguerProductos)}
    </CardContainer>
  );
};

export default CardProduct;

const CardContainer = styled.article`
  @media screen and (min-width: 320px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 2em;
    gap: 80px;
    background-color: #0d0d0d;
  }
`;

const Card = styled.div`
  @media screen and (min-width: 320px) {
    width: 97%;
    height: 17em;
    flex-direction: column;
    background-color: #000;
  }
`;

const CardTittle = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    position: absolute;
    flex-direction: column;
    height:56%;
    left: 4px;
    width: 12.5em;
    color: rgb(255, 255, 255,0.9);
    background: rgb(0, 0, 0,0.4);
    z-index: 2;
    align-items: center;
    img {
      width: 55px;
      height: 55px;
      z-index: 2;
      opacity: 0.7;
    }
    h4{
      z-index: 2;
    }
    h3 {
      font-family: "Oswald", sans-serif;
      z-index: 2;
    }
  }
`;
const CardInfo = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      position: relative;
      width: 70%;
      height: 16.9em;
      border-radius: 5px;
      left: 50px;
    }
  }
`;
const ContainerButton = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  @media screen and (min-width: 320px) {
/* From uiverse.io */
  padding: 1.3em 2em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: rgb(255, 255, 102,0.7);
  border: none;
  border-radius: 45px;
  font-size: medium;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

:hover {
  background-color: rgb(13, 13, 13,0.4);

  color: #fff;
  transform: translateY(-7px);
}

:active {
  transform: translateY(-1px);
}
  }
`;
