import React from 'react';
import { BsGithub, BsLinkedin, BsMailbox, BsFile } from 'react-icons/bs';
/*import { images } from '../../constants';*/
/*import { FaFacebookF } from 'react-icons/fa';*/

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://www.linkedin.com/in/andr%C3%A9-mayala/" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
    </div>
    <div>
    <a href="mailto:andre.mayala@outlook.fr" ><BsMailbox /></a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/andr%C3%A9-mayala/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
    </div>
    <div>
    <a href="../../assets/Andre_Mayala.pdf" download="Andre_Mayala" target="_blank" rel="noopener noreferrer"><BsFile /></a>
</div>
  </div>
);

export default SocialMedia;