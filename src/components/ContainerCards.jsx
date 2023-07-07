import {Cards} from './Cards.jsx';
export const ContainerCards =()=> {
    return (
        <div className='flex flex-col sm:flex-row justify-evenly mb-10 items-center'>
        <Cards url={"../src/assets/message-time-svgrepo-com.svg"} text={"Automatizar y agilizar las respuestas, sin perder la cercanía con tus contactos con un chatbot que responde 24/7."}></Cards>
        <Cards url={"../src/assets/stats-lines-svgrepo-com.svg"} text={"Mejorar la experiencia de tus clientes con conversaciones a medida."}></Cards>
        <Cards url={"../src/assets/list-check.svg"} text={"Evitar pérdida de datos e historial de conversaciones de tus contactos"}></Cards>
        </div>        
    )
}