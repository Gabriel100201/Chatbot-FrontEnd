import { ContainerCards } from "./ContainerCards"
import { Plan } from "./Plan"

export const Servicio =()=> {
return ( 
    
    <section className="bg-white w-full h-auto pt-20 flex flex-col items-center">
        <div className="pl-4 pb-10">
            <h1 className="text-left text-[30px] font-bold pb-5">Mejora los resultados de tu centro de salud con una atención automatizada</h1>   
            <h4 className="text-left text-[20px]">El chatbot para WhatsApp te brinda mayor seguridad y protección de tu base de datos. Pero, además, esta conexión te permitirá:</h4>                 
        </div>
        <ContainerCards></ContainerCards>
        <div className="bg-bgoscuro w-full h-auto pt-20 flex flex-col items-center pb-10">
            <h1 className="mb-10 text-white text-left text-[25px] font-bold pb-5 ml-3">¿Quieres conectar tu línea de WhatsApp con nuestro sistema?</h1>
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-9 py-4 mr-2 mb-2 transition-all ">Quiero más información</button>
        </div>
        <Plan></Plan>
    </section>                 
     
    )
}
