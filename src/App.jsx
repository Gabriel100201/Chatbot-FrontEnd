import { Navbar } from "./components/Navbar"
import { Inicio } from "./components/Inicio"
import { Servicio } from "./components/Servicio"
import { ContainerCards } from "./components/ContainerCards"
export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Inicio></Inicio> 
      <Servicio></Servicio>    
      <ContainerCards></ContainerCards>
    </>
  )
}
