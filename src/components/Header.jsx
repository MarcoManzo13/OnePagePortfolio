import './Header.css'
import ConditionalMenu from './ConditionalMenu.jsx'
import Logo from "./Logo";

function Header(){
    if (window.matchMedia("(max-width: 980px)").matches) {
        return (
            <header className='headerMobile'>
                <div className="row">
                    <div className="col-7">
                        <Logo initial="M"/>
                    </div>
                    <div className="col-5">
                        <ConditionalMenu />
                    </div>
                </div>
            </header>
        )     
    }else {
        return(
            <header className='headerDesktop'>
                <div className="row">
                    <div className="col-7">
                        <Logo initial="M"/>
                    </div>
                    <div className="col-5">
                        <ConditionalMenu />
                    </div>
                </div>
            </header>
    )}
}

export default Header;