import { Parallax } from 'react-parallax';
import styled, { css, keyframes } from 'styled-components'; // Import styled-components
// import code3 from '../img/code3.jpg';

const row1 = [
    "UI/UX Design", "Graphic Design", "Logo Design", "Branding", "AI Development", "Web Dev", "App Dev", "Webflow ",
];
const row2 = [
    "UI/UX Design", "Graphic Design", "Logo Design", "Branding", "AI Development", "Web Dev", "App Dev", "Webflow",
];

const Service = () => (
    <Parallax className='parallax-container' strength={400} > {/* Added bgImage for the image */}
        <Wrapper>
            <Text>Service</Text>
            <Note>All you want, delivered on time</Note>
            <Marquee>
                <MarqueeGroup>
                    {
                        row1.map((el, index) => (
                            <Text1 key={index}>{el}</Text1>
                        ))
                    }
                </MarqueeGroup>
                <MarqueeGroup>
                    {
                        row1.map((el, index) => (
                            <Text1 key={index}>{el}</Text1>
                        ))
                    }
                </MarqueeGroup>
            </Marquee>
            <br></br>
            <Marquee>
                <MarqueeGroup2>
                    {
                        row2.map((el, index) => (
                            <Text1 key={index}>{el}</Text1>
                        ))
                    }
                </MarqueeGroup2>
                <MarqueeGroup2>
                    {
                        row2.map((el, index) => (
                            <Text1 key={index}>{el}</Text1>
                        ))
                    }
                </MarqueeGroup2>
            </Marquee>
        </Wrapper>
    </Parallax>
);
export default Service;


const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Text = styled.div`
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 10px; /* Fixed typo */
    color:white;
`;

const Note = styled.div`
    font-size: 18px;
    font-weight: 200;
    margin-bottom: 40px; 
    color:rgb(216, 220, 223);
`;

const Marquee = styled.div`
    display: flex;
    width: 1200px;
    overflow: hidden; 
    user-select: none;

    
`;
const scrollX = keyframes`
from{
left: translateX(0);
}
to{
    transform: translateX(-100%);
}`;

const common = css`
flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap; 
    width: 100%;
    animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
    ${common}
`;
const MarqueeGroup2 = styled.div`
${common}
animation-direction: reverse;
animation-delay: -3s;

`;

const Text1 = styled.div`
    width: 6rem;
    background-color: #141414;
    padding: 1rem;
    border-radius: 1rem;
    font-family: Arial, sans-serif; /* Replace with a fallback or variable if needed */
    font-size: 16px; /* Ensure the font size is specified explicitly */
    font-weight: 400; /* Regular weight */
    border: 1px solid #313131;
    color: white;
    text-align: center; /* Center text alignment (optional) */
    display: flex; /* Allows centering if using flex */
    align-items: center; /* Vertically center text */
    justify-content: center; /* Horizontally center text */
`;

