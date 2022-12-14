import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


export function Sidebar() {
    return (
        <>
        <div>
            <button className="buttonsSidebar">
                <a href="https://www.linkedin.com/in/marcomanzoruiz/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="3x" color='#0072b1' className='icons'/></a>
            </button>
            
        </div>
        <div className="verticalLine"></div>
        <div>
            <button className="buttonsSidebar">
                <a href="https://github.com/MarcoManzo13" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="3x" color='#171515' className='icons'/></a>
            </button>
        </div>
        <div className="verticalLine"></div>
        <div>
            <button className="buttonsSidebar">
                <a href="mailto: marcomanzoruiz@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="3x" color='#0072c6' className='icons'/></a>
            </button>
        </div>
        </>
    )
}

export default Sidebar;