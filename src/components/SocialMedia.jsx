import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/ayush-soni-aab768183/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/AyushSoni-git">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://instagram.com/21_ayush__">
        <BsInstagram  />
      </a>
    </div>
  </div>
);

export default SocialMedia;
