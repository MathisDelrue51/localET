// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, GitHub } from 'react-feather';

// == Import
import './styles.scss';
import alice from 'src/assets/teamPictures/Alice.jpg';
import marion from 'src/assets/teamPictures/Marion.jpg';
import yassine from 'src/assets/teamPictures/Yassine.jpg';
import mathis from 'src/assets/teamPictures/Mathis.jpg';

// == Component
const ContactPage = () => (
  <div className="container">
    <NavLink to="/" className="link">
      Retourner à l'accueil
    </NavLink>
    <h1 className="title">
      LocalETeam
    </h1>
    <div className="team">
      <div className="dev">
        <img src={alice} alt="Alice" className="picture" />
        <div className="devInfo">
          <h2 className="devName">
            Alice
          </h2>
          <p className="devRole">
            Product owner, dev front
          </p>
          <div className="devLink">
            <GitHub size={25} className="devIcon" />
            <a href="https://github.com/AliceMsx" className="externalLink">GitHub</a>
          </div>
          <div className="devLink">
            <Linkedin size={25} className="devIcon" />
            <a href="https://www.linkedin.com/in/alice-masseaux-99a644193/" className="externalLink">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="dev">
        <img src={yassine} alt="Yassine" className="picture" />
        <div className="devInfo">
          <h2 className="devName">
            Yassine
          </h2>
          <p className="devRole">
            Lead dev back
          </p>
          <div className="devLink">
            <GitHub size={25} className="devIcon" />
            <a href="https://github.com/Idrissi-55" className="externalLink">GitHub</a>
          </div>
          <div className="devLink">
            <Linkedin size={25} className="devIcon" />
            <a href="https://www.linkedin.com/in/yassine-idrissi-alami-8056ab161/" className="externalLink">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="dev">
        <img src={marion} alt="Marion" className="picture" />
        <div className="devInfo">
          <h2 className="devName">
            Marion
          </h2>
          <p className="devRole">
            Lead dev front
          </p>
          <div className="devLink">
            <GitHub size={25} className="devIcon" />
            <a href="https://github.com/marion-vgv" className="externalLink">GitHub</a>
          </div>
          <div className="devLink">
            <Linkedin size={25} className="devIcon" />
            <a href="https://www.linkedin.com/in/marionvangaeveren/?locale=fr_FR" className="externalLink">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="dev">
        <img src={mathis} alt="Mathis" className="picture" />
        <div className="devInfo">
          <h2 className="devName">
            Mathis
          </h2>
          <p className="devRole">
            Scrum master, dev back
          </p>
          <div className="devLink">
            <GitHub size={25} className="devIcon" />
            <a href="https://github.com/MathisDelrue51" className="externalLink">GitHub</a>
          </div>
          <div className="devLink">
            <Linkedin size={25} className="devIcon" />
            <a href="https://www.linkedin.com/in/mathis-delrue-858b94172/" className="externalLink">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default ContactPage;
