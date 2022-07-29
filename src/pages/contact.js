import React from 'react';
import Layout from '../Components/Layout';
import HomeHero from '../Components/HomeHero';
import Contact from '../Components/Contact';

export default function service() {
  return (
    <Layout>
      <HomeHero />
      <Contact />
    </Layout>
  );
}
