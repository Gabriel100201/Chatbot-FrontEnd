export const Footer = () => {
    return(
        <section className="w-full bg-[#B38BCB54] py-8 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <h4 className="text-[12px] font-bold text-black tracking-widest text-center">Contacto:</h4>
                <h5 className="text-purple text-[10px] font-bold tracking-widest">gabrielfunes100201@gmail.com</h5>
            </div>
            <div className="line h-[1px] w-5/6 opacity-20 bg-black my-5 self-center"></div>
            <div className="flex flex-col items-center justify-center gap-2">
                <h4 className="text-[12px] font-bold text-black tracking-widest text-center">Secciones</h4>
                <ul className="text-purple text-[10px] font-bold tracking-widest flex flex-col items-center">
                    <li>Guía</li>
                    <li>Catálogo</li>
                    <li>Personalizar</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className="line h-[1px] w-5/6 opacity-20 bg-black my-5 self-center"></div>
            <div className="flex flex-col items-center justify-center gap-2">
                <h4 className="text-purple text-[10px] font-bold tracking-widest flex flex-col items-center">© NittaClothes todos los derechos reservados.</h4>
                <h4 className="text-purple text-[10px] font-bold tracking-widest flex flex-col items-center">Diseñado y desarrolado por Gabriel Funes.</h4>
            </div>
        </section>
    )
}