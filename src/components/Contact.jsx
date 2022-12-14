import './Contact.css'

function Contact() {
    return (
        <>
        <div className='containerContact'>
            <p className='titleContact'>Get In Touch</p>
            <p className='paragraphContact'>At the moment I'm doing a couple of website developing jobs. However, I am open for any kind of opportunity! </p>
            <button className='buttonsContact'>
            <a className='contactContact' href="mailto: marcomanzoruiz@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a>
            </button>
        </div>
        </>
    )
}

export default Contact;