import React from 'react';
import Layout from '../Components/Layout';
import HomeHero from '../Components/HomeHero';
import Service from '../Components/Service';

export default function service() {
  return (
    <Layout>
      <HomeHero />
      <Service />
    </Layout>
  );
}
