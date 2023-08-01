import { PricingCards } from "./PricingCards"

export const Plan =()=> {
    return(
        <section className="bg-white w-full h-auto pt-20 flex flex-col items-center">
            <div className="pl-4 pb-10">
                <h1 className="text-left text-[30px] font-medium pb-5">Crea conversaciones en WhatsApp <b>a la medida de tu negocio</b></h1>
            </div>    
            <PricingCards></PricingCards>   
        </section>
    )
}