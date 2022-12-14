import './Body.css';

import Sidebar from './Sidebar';

function Body() {
    return(
        <div className='bodyContainer' id='body'>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-lg-10 col-sm-10 infoBodyContainer">
                <h1>Hello there! My name is</h1>
                <h2>Marco Manzo.</h2>
                <h3>I am a Computer Science Student</h3>
                <h4>I have great passion to learn new things and build projects I love. Welcome and I hope that you will like my work as much as I do.</h4>
            </div>
            <div className="col-1 sidebar">
                <Sidebar />
            </div>
        </div>
        </div>
    )
}

export default Body;