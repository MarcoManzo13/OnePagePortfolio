import './HeaderButtons.css'

export function HeaderButtons() {
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
    return (
<>
<button className='buttons' onClick={() => followLinkAbout()}>About</button>
<button className='buttons' onClick={() => followLinkProjects()}>Projects</button>
<button className='buttons' onClick={() => followLinkUpdates()}>Updates</button>
<button className='buttonResumeB'><a className="buttonResume" href="https://drive.google.com/file/d/1GJCsS96gefXn6q1vgtYDio8cJX1mfusx/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></button>
</>
    );
}

export default HeaderButtons;