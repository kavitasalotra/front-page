import React from 'react';
import service from '../content/service.yaml';
import Heading from './element/Heading';
import ServicesItem from './ServicesItem';

export default function Services() {
  return (
    <section className="section  has-text-centered">
      <div className="container">
        <Heading text={service.title} />
        <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-2">
          {service.description}
        </h2>

        <ServicesItem services={service.services} />
      </div>
    </section>
  );
}
