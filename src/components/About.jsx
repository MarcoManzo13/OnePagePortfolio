import './About.css'
import fotoEleganteYo from './images/fotoEleganteYo.jpeg'

function About() {
    if (window.matchMedia("(max-width: 980px)").matches) {
        return (
            <section className='aboutSectionMobile'>
                <div className="row">
                    <div className="col-12">
                        <p className='titleAboutMobile'>A little bit about me.</p>
                        <p className='infoMobile'>
                            Hello! My name is Marco and at the moment I am studying computer science in college. 
                            My goal is to learn not only in school but also by my own. I love creating things to be proud of.
                        </p>
                        <p className='infoMobile2'>
                            I have also worked as a FullStack developer in Bunda.mx where I created components using information from databases and making it visible in a way that my UX design teacher would be proud. 
                            Hope you stay to see what I have worked on!
                        </p>
                    </div>
                    <div className="col-12">
                        <img className="fotoMobile" src={fotoEleganteYo} alt="" /> 
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className='aboutSection'>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                    <p className='titleAbout'>A little bit about me.</p>
                    <p className='info'>
                        Hello! My name is Marco and at the moment I am studying computer science in college. 
                        My goal is to learn not only in school but also by my own. I love creating things to be proud of.
                        This portfolio has been my most challenging project yet as it is created with React, Bootstrap 5 and any tool I could lay my hands on.
                        I've also worked with Object Oriented Programs such as C++ and Python. You can see some of my projects down below.                
                    </p>
                    <p className='info2'>
                        I have also worked as a FullStack developer in Bunda.mx where I created components using information from databases and making it visible in a way that my UX design teacher would be proud of. 
                        Hope you stay to see what I have worked on!
                    </p>
                </div>
                <div className="col-5">
                    <img className="foto" src={fotoEleganteYo} alt="" />    
                </div>
                <div className="col-1"></div>
            </div>
            </section>
    )}
}

export default About;