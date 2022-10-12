import './Body.css';
import './Sidebar'
import Sidebar from './Sidebar';

function Body() {
    if (window.matchMedia("(max-width: 980px)").matches) {
        return (
            <section className='body'>
                <div className="row">
                    <div className="col-12 introMobile">
                        <h1 className='mobile1'>Hello there! My name is</h1>
                        <h2 className='mobile2'>Marco Manzo.</h2>
                        <h3 className='mobile3'>I am a Computer Science Student</h3>
                        <h4 className='mobile4'>I have great passion to learn new things and build projects I love. Welcome and I hope that you will like my work as much as I do.</h4>
                    </div>
                </div>
            </section>
        )
    } else {
        return(
            <section className='body' id='body'>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10 intro">
                    <h1>Hello there! My name is</h1>
                    <h2>Marco Manzo.</h2>
                    <h3>I am a Computer Science Student</h3>
                    <h4>I have great passion to learn new things and build projects I love. Welcome and I hope that you will like my work as much as I do.</h4>
                </div>
                <div className="col-1 sidebar">
                    <Sidebar />
                </div>
            </div>
            </section>
    )}
}

export default Body;