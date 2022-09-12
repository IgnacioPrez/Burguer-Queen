import styled from "styled-components"


/* 
___________________________
|                          |               
|         Principal        |
|__________________________|

*/
export const ContenedorPrincipal = styled.div`

  @media screen and (max-width:450px){
    width: 100%;
  }
  @media screen and (max-width:768px){
    width: 100%;
  }
`




/* 
___________________________
|                          |               
|         Header           |
|__________________________|

*/
export const Head  = styled.header`
@media screen and (max-width: 450px){
  width: auto;
  height: 5em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  img{
  width: 75px;
  background-color: #ffff66;
  border-radius:79% 21% 73% 27% / 88% 27% 73% 12% ;

}
h1{
  color: #fff;
  font-size: x-large;
  font-family:'Fjalla One', sans-serif;
  border-bottom: solid 2px #1f1f1ffd ;
}
svg{
  color: #B3B3B3;
  font-size: x-large;
  position: relative;
  right: 10px;
  padding: 0.4em;

}
}

@media screen and (min-width:768px){
  border: solid 2px #fff;
  width: 100%;
  img{
  width: 75px;
  background-color: #ffff66;
  border-radius:79% 21% 73% 27% / 88% 27% 73% 12% ;

}
h1{
  color: #fff;
  font-size: x-large;
  font-family:'Fjalla One', sans-serif;
  border-bottom: solid 2px #1f1f1ffd ;
}
  svg{
  color: #Fff;
  font-size: x-large;
  position: relative;
  right: 10px;
  padding: 0.4em;
  border: solid 2px #1f1f1ffd;
  }

}

`


/* 
___________________________
|                          |               
|         Main             |
|__________________________|

*/
export const ContainerMain = styled.main`
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 3em;
    margin-bottom: 3em;
    gap: 50px;
    align-items: center;
    background-color: #E6E6E6;

  }
  @media screen and (min-width:768px){

  }
`
export const ContainerCategories = styled.section`
    @media screen and (max-width:450px){
        height: auto;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
        display: flex;
        justify-content: center;
        img{
            width: 80px;
            height: 80px;
            cursor: pointer;
        }
    } 
    @media screen and (min-width: 768px){

    }
`
export  const CardContainer = styled.article`
  @media screen and (max-width: 450px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    background-color: #E6E6E6;
  }
  @media screen and (min-width: 768px){

  }
`;

export  const Card = styled.div`
  @media screen and (max-width: 450px) {
    width: 90%;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    padding: 0.5em;
  }
  @media screen and (min-width: 768px){

  }
`;

export  const CardTittle = styled.div`
  @media screen and (max-width: 450px) {
    display: flex;
    position: absolute;
    left: 31px;
    height:auto;
    border-radius: 7px 0px 0px 7px ;
    color: rgb(255, 255, 255,0.9);
    background: rgb(0, 0, 0,0.4);
    z-index: 2;
    gap: 10px;
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
  @media screen and (min-width: 768px){

  }
`;
export  const CardInfo = styled.div`
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 90%;
      height: 15.9em;
      border-radius: 10px;
      left: 50px;
    }
  }
  @media screen and (min-width: 768px){

  }
`;

export  const Button = styled.button`
  @media screen and (max-width: 450px) {

  padding: 0.8em ;
  height: 37px;
  font-size: 12px;
  letter-spacing: 2.5px;
  color: #000;
  font-weight: bold;
  background-color: rgb(255, 255, 102,0.7);
  border: none;
  border-radius: 10px;
  font-size: medium;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

&:hover {
  background-color: rgb(13, 13, 13,0.4);

  color: #fff;
  transform: translateY(-7px);
}

&:active {
  transform: translateY(-1px);
}
  }
@media screen and (min-width: 768px){

}
`;

export const CardPrice = styled.div`
  @media screen and (max-width: 450px){
    width: 100%;
    display: flex;
    align-items: center;
    gap: 70px;
    h4{
      font-size: 17px;
    }
    span{
      color: #FF4D4D;
      font-size: 18px;
    }
  }

`


/* 
___________________________
|                          |               
|         Footer           |
|__________________________|

*/
export const ContainerFoot = styled.footer`
  @media screen and (max-width: 450px) {
    margin-top: 5em;
    width: 100%;
    height: 7em;
    background-color: #FFFFCC;

    display: flex;
    svg {
    cursor: pointer;
    padding: 1em;
    color: #404040;
    font-size: xx-large;
  }
  }

  @media screen and (min-width:768px){

  }
`;
