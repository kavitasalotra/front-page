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
            <Heading text="About" />
            <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-5">
              It is an amazing one-page theme with great features that offers an
              incredible experience. It is easy to install, make changes, adapt
              for your business. A modern design with clean lines and styling
              for a wide variety of content, exactly how a business design
              should be. You can add as many images as you want to the main
              header area and turn them into slider.
            </h2>
          </div>
        </div>
        <ProgressBar works={about.works} />
      </div>
    </section>
  );
}
