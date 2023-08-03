export const Inicio = () => {
    return (
        <section className="bg-fondosec flex-wrap w-full h-auto flex flex-col items-center pb-20 md:flex-row md:justify-center">           
            <div className="  w-full md:w-1/2 pl-4 md:pt-0">
            <h1 className="text-left md:text-left text-[35px] font-bold pt-16 md:pt-0 md:ml-96">La mejor manera de comenzar una conversación con tus clientes</h1>
            <h4 className="text-left md:text-left text-[20px]  md:ml-96 md:">Te ayudamos a simplificar la atención al cliente y mejorar tu relación con ellos.</h4>
            </div>
            <div className="w-[300px] md:w-1/2 flex justify-center items-center pt-16">
                <img src="src\assets\chatbot1.svg" alt="chatbot" className="md:w-1/2 md:mr-80 md:mt-16" />
            </div>
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-9 py-4 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-all">Prueba la Demo</button>         
        </section>
    )
}