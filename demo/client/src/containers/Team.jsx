import React from "react";
import TeamMember from "../components/TeamMember.jsx";
import Header from "../images/headers/QUELL-team quell-2color_1.svg";
import Nick from "../images/profile_pics/QUELL-headshot w border-Nick.png";
import Mike from "../images/profile_pics/QUELL-headshot w border-Mike.png";
import Rob from "../images/profile_pics/QUELL-headshot w border-Rob.png";
import Justin from "../images/profile_pics/QUELL-headshot w border-Justin.png";
import Andrei from "../images/profile_pics/QUELL-headshot w border-Andrei.png";
import Dasha from "../images/profile_pics/QUELL-headshot w border-Dasha.png";
import Derek from "../images/profile_pics/QUELL-headshot w border-Derek.png";
import Xiao from "../images/profile_pics/QUELL-headshot w border-Xiao.png";
import Robleh from "../images/profile_pics/QUELL-headshot w border-Robleh.png";
import Thomas from "../images/profile_pics/QUELL-headshot w border-Thomas.png";
import Angela from "../images/profile_pics/QUELL-headshot w border-Angela.png";
import Ken from "../images/profile_pics/QUELL-headshot w border-Ken.png";
import Jinhee from "../images/profile_pics/QUELL-headshot w border-Jinhee.png";
import Nayan from "../images/profile_pics/QUELL-headshot w border-Nayan.png";
import Tash from "../images/profile_pics/QUELL-headshot w border-Tash.png";
import Tim from "../images/profile_pics/QUELL-headshot w border-Tim.png";
import Chang from "../images/profile_pics/QUELL-headshot w border-Chang.png";
import Josh from "../images/profile_pics/QUELL-headshot w border-Josh.png";
import Robert from "../images/profile_pics/QUELL-headshot w border-Robert.png";
import DavidLopez from "../images/profile_pics/QUELL-headshot w border-DavidLopez.png";
import IdanMichael from "../images/profile_pics/QUELL-headshot w border-IdanMichael.png";
import SercanTuna from "../images/profile_pics/QUELL-headshot w border-SercanTuna.png";
import ThomasPryor from "../images/profile_pics/QUELL-headshot w border-ThomasPryor.png";
/* 
  Component to generate each teams section
*/

const davidLopez = {
  name: "David Lopez",
  src: DavidLopez,
  bio: "David is a fullstack software engineer with experience in React,Redux, GraphQL, Node.JS and Express. He takes pride in the software engineering community's culture of knowledge sharing and collaboration. When he is not at his desk, he’s probably in the garage, working on one of his project cars, brewing beer, or in the kitchen pursuing that perfect bowl of ramen.",
  linkedin: "http://www.linkedin.com/in/david-michael-lopez/",
  github: "https://github.com/DavidMPLopez",
};
const idanMichael = {
  name: "Idan Michael",
  src: IdanMichael,
  bio: "Idan is a full-stack software engineer with experience in Express, React and several database models. His goal with Quell is to scale the caching algorithms to create a more thorough caching platform. In his free time he likes to practice Brazilian Jiu Jitsu and watch movies.",
  linkedin: "https://www.linkedin.com/in/idanmichael/",
  github: "https://github.com/IdanMichael",
};
const sercanTuna = {
  name: "Sercan Tuna",
  src: SercanTuna,
  bio: "Sercan is a full stack software engineer specializing in React , Nodejs ,Express and GraphQl . He has particular interest in user interface and performance optimization , and passionate about contributing to the open-source community . In his spare time , he can be found playing tennis , watching soccer and traveling .",
  linkedin: "https://www.linkedin.com/in/sercantuna/",
  github: "https://github.com/srcntuna",
};
const thomasPryor = {
  name: "Thomas Pryor",
  src: ThomasPryor,
  bio: "Tom Pryor is a software engineer who also enjoys playing guitar and video games in between coding full-stack projects! Everything from Express on the back end to React on the front end!",
  linkedin: "https://www.linkedin.com/in/thomas-pryor-639347b2",
  github: "https://github.com/Turmbeoz",
};
const robert = {
  name: "Robert Howton",
  src: Robert,
  bio: "Robert is a software engineer with experience in React, Node.js/Express, and several database models (relational, document, and key-value). He believes in the importance of open-source software and strives to make contributions with clean, optimized, and maintainable code. When not at work, he can be found reading philosophy or science fiction, traveling to ancient sites, or sampling lesser-known varietals.",
  linkedin: "https://www.linkedin.com/in/roberthowton/",
  github: "https://github.com/roberthowton",
};

const chang = {
  name: "Chang Cai",
  src: Chang,
  bio: "Chang is a full-stack developer specializing in React and Node.js, with a passion for frontend development and optimization. He is passionate about all things engineering whether the medium is code, wood, 3D filaments and resins, fabric or otherwise.  He’s a natural born tinkerer with endless curiosity, always seeking new things to learn and new skills to master.",
  linkedin: "https://www.linkedin.com/in/chang-c-cai/",
  github: "https://github.com/ccai89",
};

const josh = {
  name: "Josh Jordan",
  src: Josh,
  bio: "Josh is a full-stack software engineer specializing in Express and Redis, with a passion for exploring the cross-sections of database management and system design. When he is not working, Josh can be found reading Shogun, practicing yoga, cooking delicious meals for his wife, and participating in Dionysian mysteries.",
  linkedin: "https://www.linkedin.com/in/josh-r-jordan/",
  github: "https://github.com/jjordan-90",
};

const jinhee = {
  name: "Jinhee Choi",
  src: Jinhee,
  bio: "Jinhee is a full-stack software engineer specializing in React, Node.js, Express, relational databases, non-relational databases, graphQL, with a passion for cache invalidation and implementing performant client-side caching storage. Jinhee enjoys visiting local attraction places with his wife and follows New York Yankees.",
  linkedin: "https://www.linkedin.com/in/jinheekchoi/",
  github: "https://github.com/jcroadmovie",
};

const nayan = {
  name: "Nayan Parmar",
  src: Nayan,
  bio: "Nayan is a full-stack software engineer specializing in React, Express, relational database, with a passion for contributing to open-source code. He has strong interest in performance optimization and front-end tech. In his free time, Nayan enjoys watching a variety of movies, and always try to find interesting books to read.",
  linkedin: "https://www.linkedin.com/in/nparmar1/",
  github: "https://github.com/nparmar1",
};

const tash = {
  name: "Tashrif Sanil",
  src: Tash,
  bio: "Tash is a full-stack software engineer specializing in Node.js, C++, Redis, GraphQL, with a passion for performance optimization. His goal with Quell is to improve server side cache retrieval response time and cache invalidation. In his free time, he likes to practice latte art.",
  linkedin: "https://www.linkedin.com/in/tashrif-sanil-5a499415b/",
  github: "https://github.com/tashrifsanil",
};

const tim = {
  name: "Tim Frenzel",
  src: Tim,
  bio: "Tim is a passionate database and system engineer with a strong desire to learn and work on scalable and non-linear systems that ultimately allow him to take deeper dives into data analytics. Hence, he focused primarily on performance questions like caching strategies, batching, and in-memory databases. Outside of engineering time, Tim is working on his meme mastery, travels across the globe, and develops investment algos.",
  linkedin: "https://www.linkedin.com/in/tim-frenzel-mba-cfa-frm-61a35499/",
  github: "https://github.com/TimFrenzel",
};

// old team
const robleh = {
  name: "Robleh Farah",
  src: Robleh,
  bio: "Robleh is a full-stack software engineer specializing in React, Express, and relational databases, with a passion for code dependability, optimization, and test driven development. His devotion to open-source projects, and strong interest in GraphQL, makes him an ideal candidate for Quell. Outside of coding, Robleh enjoys hiking, tea collecting, and volunteering in developing countries abroad.",
  linkedin: "https://www.linkedin.com/in/farahrobleh/",
  github: "https://github.com/farahrobleh",
};

const thomas = {
  name: "Thomas Reeder",
  src: Thomas,
  bio: "Thomas is a full-stack JavaScript engineer specializing in React and Node.js, and always wishes he had more time to write tests. His goal with Quell is maintaining a consistent, modular codebase to make future development simple and enjoyable. In his free time he can be found trying to bake pastries, or singing ABBA songs at karaoke.",
  linkedin: "https://www.linkedin.com/in/thomas-reeder/",
  github: "https://github.com/nomtomnom",
};

const angela = {
  name: "Angela Franco",
  src: Angela,
  bio: "Angela is a full-stack software engineer experienced in React and Express, with a passion for code reliability and testing. She has a particular interest in exploring innovative technologies to build tools that make the world a better place. Outside of coding, Angela is a travel and hospitality enthusiast and a Soccer World Cup fanatic.",
  linkedin: "https://www.linkedin.com/in/angela-j-franco/",
  github: "https://github.com/ajfranco18",
};

const ken = {
  name: "Ken Litton",
  src: Ken,
  bio: "Ken is a full-stack JavaScript software engineer with a passion for test driven development and recursive algorithms. He cares deeply about sharing what he learns through open-source projects and making the world a more open-minded place to live. Outside of coding, Ken is an avid reader of classical fiction, psychological studies, and hip-hop lyrics.",
  linkedin: "https://www.linkedin.com/in/ken-litton/",
  github: "https://github.com/kenlitton",
};

const andrei = {
  name: "Andrei Cabrera",
  src: Andrei,
  bio: "Andrei Cabrera is a full-stack JavaScript engineer with a particular interest in user interaction and website performance. specializing in React and Express with a focus in server protocols. He is passionate about open-source projects, refactoring code and testing. Dedicate to his family and friends.",
  linkedin: "https://www.linkedin.com/in/andrei-cabrera-00324b146/",
  github: "https://github.com/Andreicabrerao",
};

const dasha = {
  name: "Dasha Kondratenko",
  src: Dasha,
  bio: "Dasha is a full-stack software engineer experienced in JavaScript. She is passionate about code readability, open-source projects and believes in technology's ability to be a force for good. Outside of programming, she is dedicated to her two dogs.",
  linkedin: "https://www.linkedin.com/in/dasha-k/",
  github: "https://github.com/dasha-k",
};

const derek = {
  name: "Derek Sirola",
  src: Derek,
  bio: "Derek is a full-stack JavaScript engineer with a particular interest for React, Redux, and Express. His passion for community-developed open-source projects makes him an exceptional candidate for Quell. Outside of coding, Derek is an avid piano player and an enthusiastic hiker.",
  linkedin: "https://www.linkedin.com/in/dsirola1/",
  github: "https://github.com/dsirola1",
};

const xiao = {
  name: "Xiao Yu Omeara",
  src: Xiao,
  bio: "Xiao is a full-stack software engineer with a passion for maximizing performance and resiliency. Xiao also cares deeply about maintainable code, automated testing, and community-driven open-source projects. Outside of coding, Xiao is a Pilates and indoor rowing enthusiast.",
  linkedin: "https://www.linkedin.com/in/xyomeara/",
  github: "https://github.com/xyomeara",
};

const nick = {
  name: "Nick Kruckenberg",
  src: Nick,
  bio: "Nick Kruckenberg is a full-stack software engineer with a particular interest in systems design. He is passionate about ed tech, community-driven open-source projects, readable code, and technology’s potential to solve problems and do good -- a central topic of his teaching and research as a lecturer in philosophy.",
  linkedin: "https://www.linkedin.com/in/nicholaskruckenberg/",
  github: "https://github.com/kruckenberg",
};

const mike = {
  name: "Mike Lauri",
  src: Mike,
  bio: "Mike Lauri is a full-stack JavaScript engineer specializing in React and Node.js.  His passion for open source projects, as well as his interest in the inner workings of GraphQL, made Quell a perfect fit.  Prior to Quell, Mike worked as a songwriter and producer in New York City, best known for his work with WWE Music Group.",
  linkedin: "https://www.linkedin.com/in/mlauri/",
  github: "https://github.com/MichaelLauri",
};

const rob = {
  name: "Rob Nobile",
  src: Rob,
  bio: "Rob Nobile is a full-stack JavaScript engineer specializing in React and Express with a focus in front-end performance optimization and server-side data transfer protocols.  Additional concentrations in tech include auth, testing and SQL.  Prior to Quell, Rob was a Frontend Engineer at EmpowerED Group, Inc. dedicated to the E-learning music space and remains an active contributor.",
  linkedin: "https://www.linkedin.com/in/robnobile/",
  github: "https://github.com/RobNobile",
};

const justin = {
  name: "Justin Jaeger",
  src: Justin,
  bio: "Justin Jaeger is a full-stack software engineer, passionate about designing and building performant user interfaces.  Outside of programming, he loves reviewing films and obsessing over Oscar predictions.",
  linkedin: "https://www.linkedin.com/in/justin-jaeger-81a805b5/",
  github: "https://github.com/justinjaeger",
};

const Team = () => {
  return (
    <>
      <img id="team-quell" src={Header}></img>
      <div id="team">
      <TeamMember
          src={davidLopez.src}
          bio={davidLopez.bio}
          name={davidLopez.name}
          linkedin={davidLopez.linkedin}
          github={davidLopez.github}
        />
        <TeamMember
          src={idanMichael.src}
          bio={idanMichael.bio}
          name={idanMichael.name}
          linkedin={idanMichael.linkedin}
          github={idanMichael.github}
        />
      <TeamMember
          src={sercanTuna.src}
          bio={sercanTuna.bio}
          name={sercanTuna.name}
          linkedin={sercanTuna.linkedin}
          github={sercanTuna.github}
        />
        <TeamMember
        src={thomasPryor.src}
        bio={thomasPryor.bio}
        name={thomasPryor.name}
        linkedin={thomasPryor.linkedin}
        github={thomasPryor.github}
      />
        <TeamMember
          src={robert.src}
          bio={robert.bio}
          name={robert.name}
          linkedin={robert.linkedin}
          github={robert.github}
        />
        <TeamMember
          src={chang.src}
          bio={chang.bio}
          name={chang.name}
          linkedin={chang.linkedin}
          github={chang.github}
        />
        <TeamMember
          src={josh.src}
          bio={josh.bio}
          name={josh.name}
          linkedin={josh.linkedin}
          github={josh.github}
        />
        <TeamMember
          src={nayan.src}
          bio={nayan.bio}
          name={nayan.name}
          linkedin={nayan.linkedin}
          github={nayan.github}
        />
        <TeamMember
          src={tash.src}
          bio={tash.bio}
          name={tash.name}
          linkedin={tash.linkedin}
          github={tash.github}
        />
        <TeamMember
          src={tim.src}
          bio={tim.bio}
          name={tim.name}
          linkedin={tim.linkedin}
          github={tim.github}
        />
        <TeamMember
          src={robleh.src}
          bio={robleh.bio}
          name={robleh.name}
          linkedin={robleh.linkedin}
          github={robleh.github}
        />
        <TeamMember
          src={thomas.src}
          bio={thomas.bio}
          name={thomas.name}
          linkedin={thomas.linkedin}
          github={thomas.github}
        />
        <TeamMember
          src={angela.src}
          bio={angela.bio}
          name={angela.name}
          linkedin={angela.linkedin}
          github={angela.github}
        />
        <TeamMember
          src={ken.src}
          bio={ken.bio}
          name={ken.name}
          linkedin={ken.linkedin}
          github={ken.github}
        />
        <TeamMember
          src={andrei.src}
          bio={andrei.bio}
          name={andrei.name}
          linkedin={andrei.linkedin}
          github={andrei.github}
        />
        <TeamMember
          src={dasha.src}
          bio={dasha.bio}
          name={dasha.name}
          linkedin={dasha.linkedin}
          github={dasha.github}
        />
        <TeamMember
          src={derek.src}
          bio={derek.bio}
          name={derek.name}
          linkedin={derek.linkedin}
          github={derek.github}
        />
        <TeamMember
          src={xiao.src}
          bio={xiao.bio}
          name={xiao.name}
          linkedin={xiao.linkedin}
          github={xiao.github}
        />
        <TeamMember
          src={nick.src}
          bio={nick.bio}
          name={nick.name}
          linkedin={nick.linkedin}
          github={nick.github}
        />
        <TeamMember
          src={mike.src}
          bio={mike.bio}
          name={mike.name}
          linkedin={mike.linkedin}
          github={mike.github}
        />
        <TeamMember
          src={rob.src}
          bio={rob.bio}
          name={rob.name}
          linkedin={rob.linkedin}
          github={rob.github}
        />
        <TeamMember
          src={justin.src}
          bio={justin.bio}
          name={justin.name}
          linkedin={justin.linkedin}
          github={justin.github}
        />
      </div>
    </>
  );
};

export default Team;
