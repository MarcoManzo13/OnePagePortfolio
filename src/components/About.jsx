import './About.css'
import fotoAbout from './images/FotoAbout.jpg'

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
                            I have also worked as a FullStack developer in 
                            
                            
                            where I created components using information from databases and making it visible in a way that my UX design teacher would be proud. 
                            Hope you stay to see what I have worked on!
                        </p>
                    </div>
                    <div className="col-12">
                        <img className="fotoMobile" src={fotoAbout} alt="" /> 
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
                            Hello! My name is <span className='importantText'>Marco</span> and at the moment I am studying <span className='importantText'>Computer Science</span>  in college. 
                            My goal is to learn not only in school but also by my own. I <span className='importantText'>love creating</span> things to be proud of.              
                    </p>                    
                    <p className='info2'>
                        I have also worked as a FullStack developer in <button className='bunda'><a className='bundaText' href="https://bunda.mx/" target="_blank" rel="noopener noreferrer">Bunda.mx</a></button> where I created components using information from databases and making it visible in a way that my UX design teacher would be proud of. 
                        Hope you stay to see what I have worked on!
                    </p>
                    <div className="row containerLists">
                        <div className="col-6">
                            <p className='titleList'>My Software Languages</p>
                            <ul> 
                                <li className='listItem'>HTML/CSS</li>
                                <li className='listItem'>JavaScript</li>
                                <li className='listItem'>React.js</li>
                                <li className='listItem'>Python</li>
                                <li className='listItem'>C++</li>
                                <li className='listItem'>Git</li>
                                <li className='listItem'>Figma</li>
                            </ul>
                            </div>
                            <div className="col-6">
                            <p className='titleList'>My Spoken Languages</p>
                            <dl>
                                <dt className='listLanguage'>Spanish</dt>
                                <dd className='listLanguageDescription'>Mother Tongue</dd>
                                <dt className='listLanguage'>English</dt>
                                <dd className='listLanguageDescription'>Bilingual Level with B2 in Pearson exam</dd>
                                <dt className='listLanguage'>French</dt>
                                <dd className='listLanguageDescription'>Business Level with B2 in DELF exam</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <img className="foto" src={fotoAbout} alt="" />    
                </div>
                <div className="col-1"></div>
            </div>
            </section>
    )}
}

export default About;