/* eslint-disable no-multi-str */
import { nanoid } from 'nanoid';
import BTree from '../components/p5/binary_tree';
import SketchSnowflakes from '../components/p5/snowflakes';

// HEAD DATA
export const headData = {
  title: 'Virtual CV', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jonathan',
  // eslint-disable-next-line prettier/prettier
  subtitle: 'I\'m due to complete a Computer Science degree at MMU in 2021.',
  cta: 'Click',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_jm.jpg',
  paragraphOne:
    'My earlier life involved touring the UK and various countries in a band called The Troubadours. \
    I was fortunate enough to achieve success playing some of the biggest UK festivals and having a number 1 \
    album in Japan.',
  paragraphTwo:
    'However, I have always had a passion for Computing and understanding how things work \
    at a fundamental level. Whilst studying, I had the opportunity to complete an internship for Arm \
    where I worked on a unique technology called MTE (Arm\'s Memory Tagging Extension). \
    I was able to enhance my Java skills and gain a thorough understanding of memory at a low level.',
  paragraphThree:
    'Technical: Java, C#, JavaScript, CSS, HTML, React, MatLab, Python, Compilers, \
    AI & ML, Mobile Development, SQL, Haskell, C/C++.',
  resume: 'https://en.wikipedia.org/wiki/The_Troubadours', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    sketchName: SketchSnowflakes,
    title: 'Binary Tree Visualisation',
    info:
      "P5 is a great way to bring algorithms to life with visualisations. I've enjoyed creating these short visuals \
      in P5 to help keep my skills sharp. Whilst implementing a binary tree algorithm is relatively easy, drawing the tree \
      can pose some issues. How do we know to apply the correct spacing etc.",
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    sketchName: SketchSnowflakes,

    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    sketchName: SketchSnowflakes,

    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to get in touch',
  btn: 'email',
  email: 'johnny.molyneux@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jonathan-m-380b914a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/BluetonicUK',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
