import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { Info } from './components/Info'
import { Catalogue } from './components/Catalogue'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
function App() {

  return (
    <div className="App bg-cream">
      <Header></Header>
      <Banner></Banner>
      <Info></Info>
      <Catalogue></Catalogue>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
