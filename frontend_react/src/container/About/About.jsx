import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap} from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

//const abouts=[{title 'web development', description: 'I am a good developper.', imgUrl: ''},
//{title 'web development', description: 'I am a good developper.', imgUrl: ''},
//{title 'web development', description: 'I am a good developper.', imgUrl: ''},]   

const About = () => {
  const [abouts, setAbouts] = useState([]);

//fetch real dynamic data from sanity

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I'm a former <span>Chemist</span> <br />future  <span>Software Architect Application Developer</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About,'app__about'),'about', "app__whitebg"); //permet un fond blanc pour cette section