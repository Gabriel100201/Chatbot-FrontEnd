export const Info = () => {
    return(
        <section className="w-full flex flex-col items-center pt-16 px-8">
            <h2 className="font-semibold text-xs w-48 text-center pb-7 leading-6 tracking-widest">¿BUSCÁS UNA PRENDA PERSONALIZADA?</h2>
            <div className="flex shadow bg-violet w-full h-32 rounded-md mb-9 px-3">
                <div className="w-2/5 flex items-end ml-1">
                    <img src="/src/assets/Gato-Centrado.svg" alt="Gato-1" className="w-4/5 max-h-28"/>
                </div>
                <div className="w-3/5 flex flex-col items-center justify-between py-3">
                    <h4 className="info-text text-center">VISITÁ NUESTRO CATÁLOGO PARA VER NUESTRAS PRENDAS PINTADAS A MANO DISPONIBLES</h4>
                    <img src="/src/assets/Arrow-down-1.svg" alt="Arrow" className="w-4"/>
                    <button className="bg-cream rounded-full info-text px-5 py-[6px] shadow font-bold">CLICK</button>
                </div>
            </div>
            <div className="flex shadow bg-violet w-full h-32 rounded-md mb-9 px-3">
                <div className="w-3/5 flex flex-col items-center justify-between py-3 ml-1">
                    <h4 className="info-text text-center">VISITÁ NUESTRO CATÁLOGO PARA VER NUESTRAS PRENDAS PINTADAS A MANO DISPONIBLES</h4>
                    <img src="/src/assets/Arrow-down-1.svg" alt="Arrow" className="w-4"/>
                    <button className="bg-cream rounded-full info-text px-5 py-[6px] shadow font-bold">CLICK</button>
                </div>
                <div className="w-2/5 flex items-end">
                    <img src="/src/assets/Gato-sorpresa_1.svg" alt="Gato-1" className="w-full max-h-28"/>
                </div>
            </div>
            
        </section>
    )
}