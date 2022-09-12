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
              {/*               <div id="contenedor">{burguer.ingredient.map((ingre)=> (
              <p>{ingre}</p>))}</div> */}
              {/* <p>{`Ingredientes: ${burguer.ingredient.join(' ')}`}</p> */}
           
            </CardInfo>
            <CardPrice>
            <h4>
              Precio:  
              <span>{` $${burguer.price}`}</span>
            </h4>
                <Button>Agregar</Button>
            </CardPrice>

          </Card>
        );
      })}
      {console.log(burguerProductos)}
    </CardContainer>
  );
};

export default CardProduct;
