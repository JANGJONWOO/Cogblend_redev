import { Parallax } from 'react-parallax';
// import { Background } from 'react-parallax';
import code1 from '../img/code1.jpg'

const Home = () => (
    <Parallax className='image' bgImage={code1} bgImageAlt="the cat" strength={400}>
        <div className='content'>
            <h1 className='text'>Welcome to Cogblend</h1>
        </div>
    </Parallax>
);
export default Home;