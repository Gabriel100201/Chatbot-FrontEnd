import { Navbar } from "./components/Navbar"
import { Inicio } from "./components/Inicio"
import { Servicio } from "./components/Servicio"
import { Footer } from "./components/Footer"
export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Inicio></Inicio> 
      <Servicio></Servicio>
      <Footer></Footer>       
    </>
  )
}
