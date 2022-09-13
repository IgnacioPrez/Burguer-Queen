import burguerIcon from '../assets/img/iconizer-WhatsApp-Image-2022-09-03-at-6.54.58-PM.svg'
import {FaShoppingCart} from 'react-icons/fa'
import { Head,BubbleAlert } from './everyComponents'

const Header = () => {
  return (
    <Head>
      <img src={burguerIcon} alt='Burger Queen Logo'/>
{/*       <h1>Burguer Queen</h1> */}
      <BubbleAlert>
        <FaShoppingCart/>
        <span>4</span>
      </BubbleAlert>
    </Head>
  )
}

export default Header
