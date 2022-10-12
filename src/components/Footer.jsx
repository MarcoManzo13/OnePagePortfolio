import './Footer.css'

function Footer() {
    function footerOnClick(){

    }
    return (
        <footer>
            <button className='buttonsFooter' onClick={() => footerOnClick()}>
            <a className='footerText' href="https://github.com/MarcoManzo13" target="_blank" rel="noopener noreferrer">Design and built by Marco Manzo</a>
            </button> 
        </footer>
    )
}

export default Footer;