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
    return (
<div className="headerButtonsContainer">
<button className='buttons' onClick={() => followLinkAbout()}>About</button>
<button className='buttons' onClick={() => followLinkProjects()}>Projects</button>
<button className='buttonResumeB'><a className="buttonResume" href="https://drive.google.com/file/d/1YMsZBTzO9f8n4zKXgZid74pF5y8aGo6z/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></button>
</div>
    );
}

export default HeaderButtons;