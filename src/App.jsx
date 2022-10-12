import React/**, {useState, useEffect} */ from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Updates from './components/Updates';
import OnePage from './components/images/OnePageUpdate.png';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="background">

      <header>
      <Header/>
      </header>

      <Body />

      <p id="about"></p>
      <About /> 

      <p id='projects' className='projectsID'></p>
      <Projects/> 

      <p id='updates' className='updatesID'></p>
      <Updates
      Title="Finished my Portfolio One Page"
      Date="11/10/2022"
      Paragraph="After learning React and applying many useful Javascript functions, I finally finished my Portfolio today. I had a mixture of emotions when I started doing it, from scared to excited, but I do believe that I can take more challenging frontend projects and add some backend aswell."
      Image={OnePage}
      />

      <Contact/>

      <Footer />

      </div>
    </div>
    );}

export default App;