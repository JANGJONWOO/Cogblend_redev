import { Parallax } from 'react-parallax';
import Spline from '@splinetool/react-spline';

const Home = () => (
    <Parallax className="parallax-container" strength={400}>
        <div className="content">
            <div className="text-section">
                <h1 className="title">Welcome to Cogblend</h1>
                <p className="subtitle">
                    We are a team of AI experts revolutionizing businesses with intelligent solutions.
                </p>
            </div>
            <div className="spline-section">
                <Spline scene="https://prod.spline.design/iFLru6IGt2XLrMPs/scene.splinecode" />
            </div>
        </div>
    </Parallax>
);

export default Home;
