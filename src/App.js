import React from 'react'
import styled from 'styled-components'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'

const App = () => {
  return (
    <Principal>
      <Header/>
      <Main/>
      <Footer/>
    </Principal>
  )
}

export default App

const Principal = styled.div`
  @media screen and (min-width: 320px){
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
}
`