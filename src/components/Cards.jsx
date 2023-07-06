export const Cards =({url, text})=>{
    return (
        <div class="m-5 w-[80%] sm:w-1/3 max-w-sm p-6 md:items-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-fondosec dark:border-gray-700">
                <img src={url} alt="icon-message" className="w-[50px]"/>
                <p class="mb-3 font-normal text-gray-500 dark:text-primary">{text}</p>
        </div>
    )
}

