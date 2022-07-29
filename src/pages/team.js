import React from 'react';
import Layout from '../Components/Layout';
import HomeHero from '../Components/HomeHero';
import Team from '../Components/Team';

export default function service() {
  return (
    <Layout>
      <HomeHero />
      <Team />
    </Layout>
  );
}
