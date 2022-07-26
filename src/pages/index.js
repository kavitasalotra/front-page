import * as React from 'react';
import Layout from '../Components/Layout';
import HomeHero from '../Components/HomeHero';
import About from '../Components/About';
import Project from '../Components/Projects';
import Testimonial from '../Components/Testimonials';
import Service from '../Components/Service';
import NewsItems from '../Components/NewsItems';

const IndexPage = () => {
  return (
    <Layout>
      <HomeHero />
      <About />
      <Project />
      <Testimonial />
      <Service />
      <NewsItems />
    </Layout>
  );
};

export default IndexPage;
