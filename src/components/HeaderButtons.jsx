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

    function followLinkResume() {
        console.log('Link followed Resume')       
    }
    return (
<>
<button className='buttons' onClick={() => followLinkAbout()}>About</button>
<button className='buttons' onClick={() => followLinkProjects()}>Projects</button>
<button className='buttons' onClick={() => followLinkUpdates()}>Updates</button>
<button className='buttonResume' onClick={() => followLinkResume()}>Resume</button>
</>
    );
}

export default HeaderButtons;