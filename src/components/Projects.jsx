import './Projects.css';
import Carousel from 'react-bootstrap/Carousel';
import Tictactoe from '../tictactoe.jpg';
import ATM from '../ATM.jpg';


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
                <Carousel fade>

                    <Carousel.Item  interval={10000}>
                    <button className='buttonProject'>
                      <a href="https://github.com/MarcoManzo13/TicTacToeProject.git" target="_blank" rel="noopener noreferrer">
                        <img
                          className="imageCarousel"
                          src={Tictactoe}
                          alt="First Slide"
                        />
                        <p className='hide'>Click the image to go to the Github repo!</p>
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
                          alt="Second slide"
                        />
                        <p className='hide'>Click the image to go to the Github repo!</p>
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