import * as React from 'react';
import Layout from '../Components/Layout';
import HomeHero from '../Components/HomeHero';
import About from '../Components/About';
import Project from '../Components/Projects';
import Testimonial from '../Components/Testimonial';
import Service from '../Components/Service';
import Blog from '../Components/Blog';

const IndexPage = () => {
  return (
    <Layout>
      <HomeHero />
      <About />
      <Project />
      <Testimonial />
      <Service />
      <Blog />
    </Layout>
  );
};

export default IndexPage;
