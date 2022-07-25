import React from 'react';
import service from '../content/service.yaml';
import Heading from './element/Heading';
import ServicesItem from './ServicesItem';

export default function Services() {
  return (
    <section className="section  has-text-centered">
      <div className="container">
        <div className="columns is-multiline is-centered">
          <div className="column is-10">
            <Heading text={service.title} />
            <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-2">
              {service.description}
            </h2>
          </div>
        </div>
        <ServicesItem services={service.services} />
      </div>
    </section>
  );
}
