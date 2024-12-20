import { Parallax } from 'react-parallax';
// import { Background } from 'react-parallax';
import code4 from '../img/code4.jpg'

const Team = () => (
    <Parallax className='image' bgImage={code4} bgImageAlt="the cat" strength={400}>
        <div className='content'>
            <h1 className='text'>Team</h1>
        </div>
    </Parallax>
);
export default Team;