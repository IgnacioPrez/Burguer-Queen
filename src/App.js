import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'
import { ContenedorPrincipal } from './Components/everyComponents'

const App = () => {
  return (
    <ContenedorPrincipal>
      <Header/>
      <Main/>
      <Footer/>
    </ContenedorPrincipal>
  )
}

export default App


