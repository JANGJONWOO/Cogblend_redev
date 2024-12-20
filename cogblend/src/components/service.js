import { Parallax } from 'react-parallax';
// import { Background } from 'react-parallax';
import code3 from '../img/code3.jpg'

const Service = () => (
    <Parallax className='image' bgImage={code3} bgImageAlt="the cat" strength={400}>
        <div className='content'>
            <h1 className='text'>Services</h1>
        </div>
    </Parallax>
);
export default Service;