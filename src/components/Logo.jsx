import './Logo.css'

function Logo({initial}) {
    if (window.matchMedia("(max-width: 980px)").matches) {
    return (
    <>
    <button className='buttonsLogoMobile'>{initial}</button>
    </>
    )
}else{
    function goToLogo() {
        var element = document.getElementById("body");
        element.scrollIntoView({behavior: "smooth"});     
    }
    return (
    <>
    <button className='buttonsLogo' onClick={() => goToLogo()}>{initial}</button>
    </>
    )
}}

export default Logo;