import { burguerProductos } from "../products/product";
import iconCard from "../assets/img/icons8-burguer-96.png";
import {
  CardContainer,
  Card,
  CardTittle,
  Button,
  CardInfo,
  CardPrice
} from "./everyComponents";



const CardProduct = () => {
  return (
    <CardContainer>
      {burguerProductos.map((burguer, index) => {
        return (
          <Card key={index}>
            <CardTittle>
              <img src={iconCard} alt="Icono card" />
              <h3>{burguer.name}</h3>
            </CardTittle>
            <CardInfo>
              <img src={burguer.img} alt={burguer.name} />
            </CardInfo>
            <CardPrice>
                <h4>{`Precio: $${burguer.price}`}</h4>
                <Button>Agregar</Button>
            </CardPrice>

          </Card>
        );
      })}
    </CardContainer>
  );
};

export default CardProduct;
