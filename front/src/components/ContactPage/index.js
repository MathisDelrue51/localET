import React from 'react';
import './styles.scss';

import { NavLink } from 'react-router-dom';

import { Smile, Linkedin, GitHub } from 'react-feather';

import alice from 'src/assets/icons/icons-1-neg.svg';

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
        <div className="picture">
          <Smile size={75} className="devIcon" />
        </div>
        <div className="devInfo">
          <h2 className="devName">
            Alice
          </h2>
          <p className="devRole">
            Product owner, dev front
          </p>
          <div>
            <GitHub size={25} className="devIcon" />
            <a href="https://github.com/AliceMsx">GitHub</a>
          </div>
          <div>
            <Linkedin size={25} className="devIcon" />
            <a href="https://www.linkedin.com/in/alice-masseaux-99a644193/">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="dev">
        <div className="picture">
          <Smile size={75} className="devIcon" />
        </div>
        <div className="devInfo">
          <h2 className="devName">
            Yassine
          </h2>
          <p className="devRole">
            Lead dev back
          </p>
          <div>
            <GitHub size={25} className="devIcon" />
            <a href="https://github.com/Idrissi-55">GitHub</a>
          </div>
          <div>
            <Linkedin size={25} className="devIcon" />
            <a href="https://www.linkedin.com/in/yassine-idrissi-alami-8056ab161/">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="dev">
        <div className="picture">
          <Smile size={75} className="devIcon" />
        </div>
        <div className="devInfo">
          <h2 className="devName">
            Marion
          </h2>
          <p className="devRole">
            Lead dev front
          </p>
          <div>
            <GitHub size={25} className="devIcon" />
            <a href="https://github.com/marion-vgv">GitHub</a>
          </div>
          <div>
            <Linkedin size={25} className="devIcon" />
            <a href="https://www.linkedin.com/in/marionvangaeveren/?locale=fr_FR">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="dev">
        <div className="picture">
          <Smile size={75} className="devIcon" />
        </div>
        <div className="devInfo">
          <h2 className="devName">
            Mathis
          </h2>
          <p className="devRole">
            Scrum master, dev back
          </p>
          <div>
            <GitHub size={25} className="devIcon" />
            <a href="https://github.com/MathisDelrue51">GitHub</a>
          </div>
          <div>
            <Linkedin size={25} className="devIcon" />
            <a href="https://www.linkedin.com/in/mathis-delrue-858b94172/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
