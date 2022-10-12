import './Updates.css'

function Updates({ Title, Date, Paragraph, Image }) {
    function followLinkProjects() {
        var element = document.getElementById("projects");
        element.scrollIntoView({behavior: "smooth"});        
    }
    if (window.matchMedia("(max-width: 980px)").matches) {
        return(
            <div className='updatesContainerMobile' id='updates'>
                <p className='UpdateMobile'>Update: {Date}</p>
                <div className="row">
                    <div className="col-12 imgContainerMobile">
                        <img src={Image} alt="Foto" className='imgWrapperMobile' />
                    </div>
                    <div className="col-12 textContainerMobile">
                        <p className='titleUpdatesMobile'>{Title}</p>
                        <p className='paragraphUpdatesMobile'>{Paragraph}</p>
                        <button className='goToProjectsButtonMobile' onClick={() => followLinkProjects()}>Go to projects</button>
                    </div>   
                </div>   
            </div>
        )
    }else{
        return (
            <div className='updatesContainer'>
                <p className='Update'>Update: {Date}</p>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4 imgContainer">
                        <img src={Image} alt="Foto" className='imgWrapper' />
                    </div>
                    <div className="col-4 textContainer">
                        <p className='titleUpdates'>{Title}</p>
                        <p className='paragraphUpdates'>{Paragraph}</p>
                        <button className='goToProjectsButton' onClick={() => followLinkProjects()}>Go to projects</button>
                    </div>
                    
                    <div className="col-2"></div>   
                </div>   
            </div>
        )
    }
}

export default Updates;