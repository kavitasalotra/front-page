import React from 'react';
import about from '../content/about.yaml';
import Heading from './element/Heading';
import ProgressBar from './ProgressBar';

export default function About() {
  return (
    <section className="section is-medium has-text-centered">
      <div className="container">
        <div className="columns is-multiline is-centered">
          <div className="column is-10">
            <Heading text={about.title} />
            <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-5">
              {about.Description}
            </h2>
          </div>
        </div>
        <ProgressBar works={about.works} />
      </div>
    </section>
  );
}
