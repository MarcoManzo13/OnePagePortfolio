import './Header.css'
import ConditionalMenu from './ConditionalMenu.jsx'
import Logo from "./Logo";

function Header(){
    return(
        <div className='row headerContainer'>
            <div className="col-1"></div>
            <div className="col-6 logoContainer">
                <Logo initial="M"/>
            </div>
            <div className="col-5">
                <ConditionalMenu />
            </div>
        </div>
    )
}

export default Header;