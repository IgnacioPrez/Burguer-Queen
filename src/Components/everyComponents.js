import styled from "styled-components"


/* 
___________________________
|                          |               
|         Principal        |
|__________________________|

*/
export const ContenedorPrincipal = styled.div`
  @media screen and (max-width:576px){
    background-color: aliceblue;
    width: 100%;
  }
  @media screen and (min-width:768px){
    background-color: aliceblue;
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

@media screen and (max-width: 576px){
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
  width: 100%;
  height: 10em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  img{
  width: 120px;
  background-color: #ffff66;
  border-radius:79% 21% 73% 27% / 88% 27% 73% 12% ;
  position: relative;
  left: 20px;
}
svg{
  color: #B3B3B3;
  font-size: 40px;
  position: relative;
  right: 20px;
  padding: 1em;
}
}
@media screen and (min-width: 1024px){
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  height: 8em;
  img{
  width: 90px;
}
svg{
  font-size: 45px;
  padding: 1em;
}
}
`
export const BubbleAlert = styled.div`
  @media screen and (max-width: 576px){
    display: flex;
    width: auto;
    span{
      position: relative;
      background-color: #FF3333;
      border-radius: 50%;
      height: max-content;
      width: 20px;
      text-align: center;
      color: #fff;
      right: 20px;
    }

  }
  @media screen and (min-width:768px){
    display: flex;
    width: auto;
    span{
      position: relative;
      background-color: #FF3333;
      border-radius: 50%;
      height: max-content;
      width: 20px;
      text-align: center;
      color: #fff;
      right: 65px;
      top: 28px;
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
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 3em;
    margin-bottom: 3em;
    gap: 50px;
    align-items: center;

  }
  @media screen and (min-width:768px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 8em;
    margin-bottom: 10em;
    gap: 50px;
    align-items: center;
  }
  @media screen and (min-width: 1024px){
    gap: 150px;
    height: auto;
    margin-top: 10em;
    margin-bottom: 10em;
  }
`
export const ContainerCategories = styled.section`
    @media screen and (max-width:576px){
        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;
        img{
            box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
            width: 80px;
            height: 80px;
            cursor: pointer;
        }
    } 
    @media screen and (min-width: 768px){
      height: auto;
        display: flex;
        justify-content: center;
        gap: 50px;
        img{
            height: 100px;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
            cursor: pointer;
        }
    }
  @media screen and (min-width: 1024px){
        img{
            height: 120px;
        }
  }
`
export  const CardContainer = styled.article`
  @media screen and (max-width: 576px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  @media screen and (min-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5em;
  }
  @media screen and (min-width: 1024px){
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
  }
`;

export  const Card = styled.div`
  @media screen and (max-width: 576px) {
    width: 80%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  }
  @media screen and (min-width: 768px){
    width:28em;
    height: 35em;
    padding: 2em;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  }
  @media screen and (min-width: 1024px){
    width: 18.5em;
    height: 27em;
  }
`;

export  const CardTittle = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
    width: max-content;
    position: relative;
    top: 30px;
    left: 45px;
    height:auto;
    border-radius: 7px ;
    color: rgb(255, 255, 255,0.9);
    z-index: 2;
    gap: 10px;
    align-items: center;
    justify-content: center;
    img {
      width: 55px;
      height: 55px;
      z-index: 2;
      opacity: 0.7;
    }

    h3 {
      font-family: "Oswald", sans-serif;
      z-index: 2;
      color: #fff;
      font-size: x-large;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
  @media screen and (min-width: 768px){
    display: flex;
    width: 71.5%;
    position: relative;
    top: 240px;
    left: 64px;
    height:auto;
    border-radius: 0px;
    color: rgb(255, 255, 255,0.9);
    background: rgb(0, 0, 0,0.4);
    z-index: 2;
    gap: 10px;
    align-items: center;
    justify-content: center;
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
  @media screen and (min-width: 1024px){
    width: 75%;
    top: 160px;
    left:37px;
    height:auto;
    border-radius: 0px ;
  }
`;
export  const CardInfo = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width:260px;
      height: 240px;
      position: relative;
      bottom: 40px;
      border-radius: 10px;
    }
  }
  @media screen and (min-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width:20em;
      height: 25em;
      border-radius: 10px;
    }
  }
  @media screen and (min-width: 1024px){
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width:14em;
      height: 17em;
      border-radius: 10px;
    }
  }
`;

export  const Button = styled.button`
  @media screen and (max-width: 576px) {

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
  
  padding: 1.3em ;
  font-size: 20px;
  letter-spacing: 2.5px;
  color: #000;
  font-weight: 900;
  margin-right: 20px;
  background-color: rgb(255, 255, 102,0.7);
  border: none;
  border-radius: 10px;
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
@media screen and (min-width: 1024px){
  
  padding: 0.8em ;
  font-size: 17px;
  letter-spacing: 2px;
  margin-right: 10px;
  border-radius: 5px;
}
`;

export const CardPrice = styled.div`
  @media screen and (max-width: 576px){
    width: 100%;
    display: flex;
    align-items: center;
    margin:0 ;
    justify-content: space-between;
    h4{
      font-size: 17px;
      
    }

  }
  @media screen and (min-width:768px){
    width: 100%;
    display: flex;
    padding: 1em;
    align-items: center;
    justify-content: space-between;
    h4{
      font-size: 28px;
    }
  }
  @media screen and (min-width:1024px){
    padding: 0.5em;
    justify-content: space-between;
    h4{
      font-size: 25px;
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
  @media screen and (max-width: 576px) {
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
    margin-top: 5em;
    width: 100%;
    height: 7em;
    background-color: #FFFFCC;

    display: flex;
    svg {
    cursor: pointer;
    padding: 0.5em;
    color: #404040;
    font-size: 40px;
  }
  }
  @media screen and (min-width:1024px){
    svg {
    padding: 0.8em;
    color: #404040;
    font-size: 30px;
  }
  }
`;
