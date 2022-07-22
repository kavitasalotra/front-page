import React from 'react';
import styled from 'styled-components';
import Heading from './element/Heading';
import TestimonialItems from './ TestimonialItems';

const Wrapper = styled.div`
  .has-background-image {
    background-image: url('images/testiomnials-background.jpg') !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export default function Testimonial() {
  return (
    <Wrapper>
      <section className="section  has-text-centered  has-background-image">
        <div className="columns is-centered">
          <div className="column ">
            <Heading text="Testimonial" />
          </div>
        </div>
        <TestimonialItems />
      </section>
    </Wrapper>
  );
}
