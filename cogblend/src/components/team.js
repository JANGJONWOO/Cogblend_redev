import React from 'react';
import { Parallax } from 'react-parallax';
import '@fortawesome/fontawesome-free/css/all.min.css';
import code1 from '../img/code1.jpg';
import code2 from '../img/code2.jpg';
import styled from 'styled-components'; // Import styled-components

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px; /* Fixed typo */
  color: white;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px; 
  color: rgb(216, 220, 223);
`;

const teamMembers = [
  {
    name: 'Manal Kukreja',
    role: 'Co-founder',
    image: code1,
    socialLinks: {
      instagram: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Krish Jagwani',
    role: 'Co-founder',
    image: code2,
    socialLinks: {
      instagram: '#',
      github: '#',
      linkedin: '#',
    },
  },
];

const TeamCard = ({ member }) => (
  <div className="card">
    <div className="imbBx">
      <img src={member.image} alt={member.name} />
    </div>
    <div className="content">
      <div className="contentBx">
        <h3>
          {member.name} <br />
          <span>{member.role}</span>
        </h3>
      </div>
      <ul className="sci">
        <li style={{ '--i': 1 }}>
          <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li style={{ '--i': 2 }}>
          <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li style={{ '--i': 3 }}>
          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const Team = () => (
  <Parallax className="parallax-container" strength={400}>
    <div className="wrapper">
      <div className="title">
        <Text>Our Team Section</Text>
        <Note>Our team at Cogblend consists of dedicated AI specialists passionate about transforming businesses with innovative solutions.</Note>
      </div>
      <div className="card_Container">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  </Parallax>
);

export default Team;
