import React, {useState} from "react";
import './Navbar.css'

const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    function followLinkAbout() {
        var element = document.getElementById("about");
        element.scrollIntoView({behavior: "smooth"});      
    }

    function followLinkProjects() {
        var element = document.getElementById("projects");
        element.scrollIntoView({behavior: "smooth"});        
    }

    function followLinkUpdates() {
        var element = document.getElementById("updates");
        element.scrollIntoView({behavior: "smooth"});         
    }

    function followLinkResume() {
        console.log('Link followed Resume')       
    }

    return(
        <div style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
                <div className="col-12 about">
                    <button className='buttonsNav' onClick={() => followLinkAbout()}>About</button>
                </div>
                <div className="col-12 about">
                    <button className='buttonsNav' onClick={() => followLinkProjects()}>Projects</button>
                </div>
                <div className="col-12 about">
                    <button className='buttonsNav' onClick={() => followLinkUpdates()}>Updates</button>
                </div>
                <div className="col-12 about">
                    <button className='buttonsNavResume' onClick={() => followLinkResume()}>Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar