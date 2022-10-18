import './Contact.css'

function Contact() {
    if (window.matchMedia("(max-width: 980px)").matches) {
    return ( 
        <>
        <div className='containerContact'>
            <p className='titleContactMobile'>Get In Touch</p>
            <p className='paragraphContactMobile'>My main goal at the moment is getting a summer internship. However, I am also open for any kind of opportunity! </p>
            <button className='buttonsContact'>
            <a className='contactContact' href="mailto: marcomanzoruiz@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a>
            </button>
        </div>
        </>
    )
} else {
    return (
        <>
        <div className='containerContact'>
            <p className='titleContact'>Get In Touch</p>
            <p className='paragraphContact'>My main goal at the moment is getting a summer internship. However, I am also open for any kind of opportunity! </p>
            <button className='buttonsContact'>
            <a className='contactContact' href="mailto: marcomanzoruiz@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a>
            </button>
        </div>
        </>
    )
}
}

export default Contact;