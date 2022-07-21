import * as React from 'react';
import Layout from '../Components/Layout';
import HomeHero from '../Components/HomeHero';
import About from '../Components/About';
import Projects from '../Components/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <HomeHero />
      <About />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
