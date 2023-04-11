export const Product = () => {
    return(
        <div className="w-full h-full flex justify-center items-center">
            <div className="product-card w-32 max-w-full h-56 bg-beige rounded-md shadow-product">
                <img src="/src/assets/Producto.webp" alt="Imagen" className="h-3/5 rounded-t-md"/>
                <div className="h-2/5 py-2 px-2 flex flex-col items-center justify-between">
                    <h2 className="font-bold text-xs self-start">Producto</h2>
                    <h4 className="text-[8px]">Descripcion del producto</h4>
                    <svg width="117" height="2" viewBox="0 0 117 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.142883" y1="1.08577" x2="116.81" y2="1.08577" stroke="black" stroke-opacity="0.18" stroke-width="0.4"/>
                    </svg>
                    <div className="flex w-full justify-between">
                        <h2 className="font-bold text-xs">$5000</h2>
                        <button className="bg-violet tracking-widest shadow-product rounded-full text-cream text-[9px] px-3 py-[3px] font-bold">COMPRAR</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}