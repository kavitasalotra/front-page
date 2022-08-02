import React from 'react';
import styled from 'styled-components';
import Heading from './element/Heading';
import project from '../content/general/project.yaml';

const Wrapper = styled.div`
  img:hover {
    opacity: 0.4;
  }
  .columns {
    margin-bottom: -7px !important;
  }
  section {
    background-image: url(https://colorlibhub.com/illdy/wp-content/themes/illdy/layout/images/front-page/pattern.png) !important;
  }
`;

export default function Project() {
  return (
    <Wrapper>
      <section className="section has-text-centered px-0">
        <div className="columns is-multiline is-centered ">
          <div className="column is-10">
            <Heading text={project.title} />
            <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-2">
              {project.subTitle}
            </h2>
          </div>
        </div>
      </section>
      <div className="columns is-gapless">
        {' '}
        {project?.projects?.map((item) => (
          <div className="column is-3">
            <img src={item.image} alt="projects" />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
