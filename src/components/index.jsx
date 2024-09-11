import React from 'react';

const Hero = React.lazy(() => import('./HeroSection'));
const About = React.lazy(() => import('./AboutSection'));
const Skills = React.lazy(() => import('./SkillsSection'));
const Projects = React.lazy(() => import('./ProjectsSection'));
const Contact = React.lazy(() => import('./ContactSection'));


 export {
    About,
    Contact,
    Hero,
    Skills,
    Projects,
}   