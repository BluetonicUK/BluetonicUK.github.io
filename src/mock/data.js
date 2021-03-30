/* eslint-disable no-multi-str */
import { nanoid } from 'nanoid';
import PNoise from '../components/p5/perlin_noise';
import SineWave from '../components/p5/sinewaves';
import Particles from '../components/p5/particles';

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
    sketchName: Particles,
    title: 'Particles',
    info: 'I was playing around with some particles and thought this looked pretty. \
           I like how simple code can produce patterns such as these particles, and by using \
           proximity, give them some kind of a relationship.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    sketchName: SineWave,

    title: 'Sine Wave Fun',
    info: 'P5 offers great functionality to create great animations. Here we are simply . \
           adjusting a sine and cosine value within the draw function and mapping RBG values  \
           whilst adjusting the frame count. I will update this in future to be more quirky!',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    sketchName: PNoise,

    title: 'Perlin Noise',
    info:
      "Perlin noise was imagined and implemented by a computer scientest in the 1980's called Ken Perlin.  \
      The idea is that random numbers are related to their previous number in a 1 or 2 dimensional space. \
      This visualisation has used a Perlin noise function to produce this animation.",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
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
