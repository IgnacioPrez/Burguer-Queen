import styled from 'styled-components'
import burguerIcon from '../assets/img/iconizer-WhatsApp-Image-2022-09-03-at-6.54.58-PM.svg'
import {FaShoppingCart} from 'react-icons/fa'
const Header = () => {
  return (
    <Head>
      <img src={burguerIcon} alt='Burger Queen Logo'/>
      <h1>Burguer Queen</h1>
      <FaShoppingCart/>
    </Head>
  )
}

export default Header

const Head  = styled.header`
  @media screen and (min-width: 320px){
    width: 100%;
    border: solid 2px black ;
    height: 5em;
    /* background-color: #FFFF66; */
    background: #000 ;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
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
    padding: 0.5em;
    border: solid 2px #1f1f1ffd;
  }
  
`