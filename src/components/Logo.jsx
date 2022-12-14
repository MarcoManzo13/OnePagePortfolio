import './Logo.css'

function Logo({initial}) {
    function goToLogo() {
        var element = document.getElementById("body");
        element.scrollIntoView({behavior: "smooth"});     
    }
    return (
    <>
    <button className='buttonsLogo' onClick={() => goToLogo()}>{initial}</button>
    </>
    )
}

export default Logo;