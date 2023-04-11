import '../styles/components/menu.css'
export const Header = () => {
    return(
        <header className="w-full px-7 h-20 bg-cream flex justify-between items-center">
            <a href="index.html">
                <img src="src/assets/Nita-Logo.svg" alt="Logo" className="w-32"/>
            </a>
            <label className="burger" for="burger">
                <input type="checkbox" id="burger"/>
                    <span></span>
                    <span></span>
                    <span></span>
            </label>
        </header>
    )
}