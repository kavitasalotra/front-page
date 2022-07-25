import React from 'react';
import Heading from './element/Heading';
import Button from './element/Button';

export default function NewsItems() {
  return (
    <section className="section  has-text-centered">
      <div className="container">
        <div className="columns is-multiline is-centered">
          <div className="column is-10">
            <Heading text="NewsItems" />
            <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-2">
              GYHUKHIUJ
            </h2>
            <Button border borderColor text="See blog " />
          </div>
        </div>
        {/* <ServicesItem services={service.services} /> */}
      </div>
    </section>
  );
}
