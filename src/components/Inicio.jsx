export const Inicio = () => {
    return (
        <section className="bg-fondosec w-full h-auto py-32 flex flex-col items-center">
            <h1 className="text-center text-[50px] font-bold">La mejor manera de comenzar una conversación con tus clientes</h1>
            <h4 className="text-center">Te ayudamos a simplificar la atención al cliente y mejorar tu relación con ellos.</h4>
            <img src="src\assets\chatbot1.svg" alt="chatbot" className="w-[500px]" />
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Prueba la Demo</button>
        </section>
    )
}