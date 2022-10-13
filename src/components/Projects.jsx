import './Projects.css';
import Carousel from 'react-bootstrap/Carousel';
import Tictactoe from '../tictactoe.jpg';
import ATM from '../ATM.jpg';
import Weather from './images/WeatherApp.png';
import CalculatorProject from './images/CalculatorProject.png';


function Projects() {

    if (window.matchMedia("(max-width: 980px)").matches) {
        return (
          <>
          <p className='projectsSectionTitleMobile'>My projects</p>
          <div className="col-12 containerCarouselMobile">
          <p className='projectsTitleMobile'>Tic Tac Toe Game</p>
            <button className='buttonProjectMobile'>
              <a href="https://github.com/MarcoManzo13/TicTacToeProject.git" target="_blank" rel="noopener noreferrer">
                <img
                  className="imageCarouselMobile"
                  src={Tictactoe}
                  alt="First Slide"
                />
              </a>
            </button>
            <p className='textCarrouselMobile'>This is a Tic Tac Toe game written in Python that uses coordinates to play. It has a "map" that shows the players what to input to enter either a O or an X.</p>
          </div>

          <div className="col-12 containerCarouselMobile">
            <p className='projectsTitleMobile'>ATM simulator</p>
            <button className='buttonProjectMobile'>
              <a href="https://github.com/MarcoManzo13/ATM---Project.git" target="_blank" rel="noopener noreferrer">
                <img
                  className="imageCarouselMobile"
                  src={ATM}
                  alt="First Slide"
                />
              </a>
            </button>
            <p className='textCarrouselMobile'>This is an ATM simulator written in Python</p>
          </div>
          </>
        )      
      }else {
        return (
            <div>
            <div className="col-2"></div>
            <div className="col-9 containerCarousel">  
                <p className='projectsTitle'>My projects</p>
                <p className='goToGithubRepo'>Click the image to go to the Github repo!</p>
                <Carousel fade>

                    <Carousel.Item  interval={10000}>
                    <button className='buttonProject'>
                      <a href="https://github.com/MarcoManzo13/WeatherApp.git" target="_blank" rel="noopener noreferrer">
                        <img
                          className="imageCarousel"
                          src={Weather}
                          alt="#"
                        />
                      </a>
                    </button>
                    <p className='textCarrousel'>A weather application that uses a personal weather API key in HTML/CSS and JavaScript. It has a search bar to let the user look for a specific city. It provides the temperature, state of the clouds, humidity and wind speed. It also takes a random background related to the chosen city each time a new city is searched.</p>
                    </Carousel.Item>

                    <Carousel.Item  interval={10000}>
                    <button className='buttonProject'>
                      <a href="https://github.com/MarcoManzo13/Scientific-Calculator.git" target="_blank" rel="noopener noreferrer">
                        <img
                          className="imageCarousel"
                          src={CalculatorProject}
                          alt="#"
                        />
                      </a>
                    </button>
                    <p className='textCarrousel'>A functional scientific calculator using HTML/CSS and JavaScript. The operations that the calculator can do go beyond the four basic operations as it also has special buttons for parentheses, trigonometric functions, exponents, inverses and pi; among other possibilities</p>
                    </Carousel.Item>

                    <Carousel.Item  interval={10000}>
                    <button className='buttonProject'>
                      <a href="https://github.com/MarcoManzo13/TicTacToeProject.git" target="_blank" rel="noopener noreferrer">
                        <img
                          className="imageCarousel"
                          src={Tictactoe}
                          alt="#"
                        />
                      </a>
                    </button>
                    <p className='textCarrousel'>This is a Tic Tac Toe game written in Python that uses coordinates to play. It has a "map" that shows the players what to input to enter either a O or an X. Check the update section for when I make a pretty GUI!</p>
                    </Carousel.Item>

                    <Carousel.Item interval={10000}>
                    <button className="buttonProject">
                      <a href="https://github.com/MarcoManzo13/ATM---Project.git" target="_blank" rel="noopener noreferrer">
                        <img
                          className="imageCarousel"
                          src={ATM}
                          alt="#"
                        />
                      </a>
                    </button>
                      <p className='textCarrousel'>This is an ATM simulator written in C++ which allows the user to get money, make withdrawals, deposits and get more money. Check the update section for when I make a pretty GUI! </p>
                    </Carousel.Item>

                </Carousel>
            </div>
            <div className="col-1"></div>

            </div>  
        )
      }
}

export default Projects;