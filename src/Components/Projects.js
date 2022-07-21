import React from 'react';
// import project from '../content/project.yaml';
import Heading from './element/Heading';

export default function Projects() {
  return (
    <section class="section is-medium has-text-centered">
      <div className="container">
        <div className="columns is-multiline is-centered">
          <div className="column is-10">
            <Heading text="Projects" />
            <h2 class=" has-text-grey-lite is-size-6 has-text-weight-normal">
              You'll love our work. Check it out!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
