import * as React from 'react';
import Layout from '../Components/Layout';
import HomeHero from '../Components/HomeHero';
import About from '../Components/About';
import Project from '../Components/Projects';
import Testimonial from '../Components/Testimonial';
import Service from '../Components/Service';
import News from '../Components/News';
import Counter from '../Components/Counter';
import Team from '../Components/Team';
import Contact from '../Components/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <HomeHero />
      <About />
      <Project />
      <Testimonial />
      <Service />
      <News />
      <Counter />
      <Team />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
