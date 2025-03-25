import './style.css'
import claudeLogo from "/Chef Claude Icon.png"

function Header(){

    return(
        <header>
            <img src={claudeLogo} alt="Claude Logo" />
            <h1>AI Chef</h1>
        </header>
    )

}

export default Header;