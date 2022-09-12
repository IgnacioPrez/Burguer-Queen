import React from 'react'
import cheeseBurguer from '../assets/img/cheese-burger-3723117.png'
import coldDrink from '../assets/img/cold-drink-3723127.png'
import frenchFries from '../assets/img/french-fries-3723118.png'
import { ContainerCategories } from './everyComponents'
const Categories = () => {
  return (
    <ContainerCategories>
        <img src={cheeseBurguer} alt='Burguer Icon'/>
        <img src={frenchFries} alt='Fries Icon'/>
        <img src={coldDrink} alt='Drink Icon'/>
    </ContainerCategories>
  )
}

export default Categories

