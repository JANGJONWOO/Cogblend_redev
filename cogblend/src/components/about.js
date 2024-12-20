import { Parallax } from 'react-parallax';
// import { Background } from 'react-parallax';
import code2 from '../img/code2.jpg'

const About = () => (
    <Parallax className='image' bgImage={code2} bgImageAlt="the cat" strength={400}>
        <div className='content'>
            <h1 className='text'>CogBlend, we specialize in AI Automation that transform businesses.</h1>
        </div>
    </Parallax>
);
export default About;