import React from 'react';
import styled from 'styled-components';
import Heading from './element/Heading';

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

const data = [
  {
    id: 1,
    image: 'images/front-page-project-1.jpg',
  },
  {
    id: 2,
    image: 'images/front-page-project-2.jpg',
  },
  {
    id: 3,
    image: 'images/front-page-project-3.jpg',
  },
  {
    id: 4,
    image: 'images/front-page-project-4.jpg',
  },
];

export default function Project() {
  return (
    <Wrapper>
      <section className="section has-text-centered px-0">
        <div className="columns is-multiline is-centered ">
          <div className="column is-10">
            <Heading text="Projects" />
            <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-0">
              you will love our work. Check it out!
            </h2>
          </div>
        </div>
      </section>
      <div className="columns is-gapless">
        {' '}
        {data.map((item) => (
          <div className="column is-3">
            <img src={item.image} alt="projects" />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
