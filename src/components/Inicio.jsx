export const Inicio = () => {
    return (
        <section className="bg-fondosec w-full h-auto flex flex-col items-center pb-20">           
            <div className="w-full pl-4 py-16">
            <h1 className="text-left md:text-center text-[35px] font-bold">La mejor manera de comenzar una conversación con tus clientes</h1>
            </div>
            <h4 className="text-left md:text-center text-[20px] px-4">Te ayudamos a simplificar la atención al cliente y mejorar tu relación con ellos.</h4>
            <img src="src\assets\chatbot1.svg" alt="chatbot" className="w-[300px] md:w-[500px]" />
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-9 py-4 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Prueba la Demo</button>         
        </section>
    )
}