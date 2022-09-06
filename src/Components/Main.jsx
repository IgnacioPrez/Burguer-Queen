import styled from 'styled-components'
import CardProduct from './CardProduct'
import Search from './Search'

const Main = () => {
  return (
    <Container>
      <Search/>
      <CardProduct/>
    </Container>
  )
}

export default Main


const Container = styled.main`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 3em;
    margin-bottom: 3em;
    align-items: center;
    background-color: #0D0D0D;

  }
`
