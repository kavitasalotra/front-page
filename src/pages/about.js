import React from 'react';
import Layout from '../Components/Layout';
import HomeHero from '../Components/HomeHero';
import About from '../Components/About';

export default function about() {
  return (
    <Layout>
      <HomeHero />
      <About />
    </Layout>
  );
}
